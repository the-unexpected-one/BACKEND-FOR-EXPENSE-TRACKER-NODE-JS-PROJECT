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
    console.log(req.body.emailid)
    res.status(200)
}