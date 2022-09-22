const path = require('path');
const sequelize= require('./util/database');

const express = require('express');

const app = express();
const cors=require('cors')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

const Expenses=require('./models/addexpense');
const User=require('./models/expenseUsers')

app.use(cors())
const signup=require('./routes/signup')
const addexpense=require('./routes/addexpense')

User.hasMany(Expenses);
Expenses.belongsTo(User)



app.use(signup)

app.use(addexpense)

sequelize
.sync()
.then((result)=>{
    app.listen(8000)
}).catch(err=>{
    console.log(err)
})

// app.listen(8000)