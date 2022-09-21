const path = require('path');

const express = require('express');

const addexpenseController=require('../controllers/addexpense'); 
const { route } = require('./signup');

const router = express.Router();

router.get('/expenses',addexpenseController.getexpense)

router.post('/addexpense',addexpenseController.postaddExpense)

router.delete('/delete/:Id',addexpenseController.deleteExpenses)


module.exports = router