const Sequelize=require('sequelize');

const sequelize=require('../util/database.js')

const addexpense=sequelize.define('addexpense',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    
    amount:{
        type:Sequelize.INTEGER,
        // autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    description: Sequelize.STRING,
    category:{
        type:Sequelize.STRING,
        // unique:true,
        // primaryKey:true
    },
    
});

module.exports=addexpense;