const addExpense=require('../models/addexpense')


const jwt =require('jsonwebtoken')
const bcrypt=require('bcrypt');
const e = require('express');

exports.postaddExpense=(req,res,next)=>{
    console.log(req.body.amt)

    const amt=req.body.amt;
    // console.log(name)
    const desc=req.body.cat;
    const category=req.body.man;
    const token=req.header('Authorization');
        console.log(token);
    const user=jwt.verify(token, '987654321ghijklmn')
    const userId=user.userId
    addExpense.create({
       amount:amt,
        description:desc,
        category:category,
        expenseUserId:userId
    }).then(result=>{
        // res.json(name)
        console.log('Expense Created');
        res.redirect('/expenses')
       
    }).catch(err=>{
        console.log(err)
    })
}

exports.getexpense=(req,res,next)=>{
    console.log(req)
    addExpense.findAll({where:{expenseUserId:req.user.id}}).then(users=>{
        // console.log(users)
        res.json(users)
    }).catch(err=>{
        console.log(err)
    })
   
} 



exports.deleteExpenses=(req,res,next)=>{
    const userId=req.params.Id;
    
    console.log(userId)
    addExpense.findByPk(userId).then(user=>{
        return user.destroy();
      })
      
      .then(result=>{
        console.log('Destroyed Expenses');
        addExpense.findAll()
        .then(users=>{
            // console.log(users)
            res.json(users)
        })
        .catch(err=>{
            console.log(err)
        })
        // res.redirect('/admin/products')
      })
        .catch(err=>{
        console.log(err);
      });
      
    
}


exports.leaderboard=(req,res,next)=>{
    let obj={};
   console.log("123")
    console.log(req.user.id)
    console.log(req.user.ispremium)
    if(req.user.ispremium===true){
        console.log("24")
        addExpense.findAll()
        .then(expenses=>{
            console.log(expenses,"abc")
            for(let i=0;i<expenses.length;i++){
                if(expenses[i].expenseUserId in obj){
                    obj[expenses[i].expenseUserId]=obj[expenses[i].expenseUserId]+expenses[i].amount


                }
                else{
                    obj[expenses[i].expenseUserId]=expenses[i].amount
                }
            }
            res.json(obj)
        }).catch(err=>{
            console.log(err)
        })
    }else{
        res.json('Nothing to show')
    }

    
}

exports.showUserBoard=(req,res,next)=>{
    const id=req.params.Id;
    console.log(id,"abc");
    addExpense.findAll({where:{expenseUserId:id}})
    .then(expenses=>{
        res.json(expenses);

    }).catch(err=>{
       res.json('Something went wrong in showUserBoard')
    })

}