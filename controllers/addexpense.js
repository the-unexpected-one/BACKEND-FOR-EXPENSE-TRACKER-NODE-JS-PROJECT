const addExpense=require('../models/addexpense')


const bcrypt=require('bcrypt');

exports.postaddExpense=(req,res,next)=>{
    console.log(req.body.amt)

    const amt=req.body.amt;
    // console.log(name)
    const desc=req.body.cat;
    const category=req.body.man;
    addExpense.create({
       amount:amt,
        description:desc,
        category:category
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
    addExpense.findAll().then(users=>{
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