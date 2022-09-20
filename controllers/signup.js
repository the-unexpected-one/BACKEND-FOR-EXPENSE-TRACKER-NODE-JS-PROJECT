const { where } = require('sequelize');
const User= require('../models/expenseUsers');
// const { unsubscribe } = require('../routes/signup');

exports.postSignUp=(req,res,next)=>{
console.log(req.body.name)
const name=req.body.name;
const emailid=req.body.emailid;
const password=req.body.password;
User.findByPk(emailid).then(user=>{
    console.log('user exists');
    return res.status(404).json({success:false, message:'User Already exists'}) 
})
User.create({
    name:name,
    emailid:emailid,
    password:password
}).then(res=>{
    console.log('User created');
}).catch(err=>{
    console.log(err)
})


}

exports.login=(req,res,next)=>{
const email=req.body.emailid;
const pass=req.body.password;
User.findAll({where:{emailid:email}}).then((user)=>{
    if(user[0].password==pass){
        res.status(200).json({success:true, message:'User Login Succesfull'}) 
    }
    else{
        res.status(401).json({success:false, message:'User not authorised'})
    }
    // console.log('1')
}).catch(err=>{
    res.status(404).json({success:false, message:'User not found'})
})
    res.status(200)
}