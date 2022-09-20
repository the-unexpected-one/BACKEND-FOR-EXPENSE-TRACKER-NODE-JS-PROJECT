const Sequelize=require('sequelize');

const sequelize=require('../util/database.js')

const expenseUser=sequelize.define('expenseUser',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name: Sequelize.STRING,
    emailid:{
        type:Sequelize.STRING,
        unique:true,
        primaryKey:true
    },
    password:Sequelize.STRING,
});

module.exports=expenseUser;