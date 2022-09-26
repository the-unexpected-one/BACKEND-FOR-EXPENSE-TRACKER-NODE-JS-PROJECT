const path = require('path');
const sequelize= require('./util/database');

const express = require('express');

const app = express();
const cors=require('cors')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

const Expenses=require('./models/addexpense');
const User=require('./models/expenseUsers');
const Order=require('./models/order')

app.use(cors())
const signup=require('./routes/signup')
const addexpense=require('./routes/addexpense')
const purchase=require('./routes/purchase')
const forgotPass=require('./routes/forgotPass')
const backendreport=require('./routes/backendreport')

User.hasMany(Expenses);
Expenses.belongsTo(User)

User.hasMany(Order);
Order.belongsTo(User)



app.use(signup)

app.use(addexpense)

app.use(purchase)

app.use(forgotPass)

app.use(backendreport)

sequelize
.sync()
.then((result)=>{
    app.listen(8000)
}).catch(err=>{
    console.log(err)
})

// app.listen(8000)