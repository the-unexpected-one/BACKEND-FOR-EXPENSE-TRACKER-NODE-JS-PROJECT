const path = require('path');
const userauthentication=require('../middleware/auth')

const express = require('express');

const addexpenseController=require('../controllers/addexpense'); 


const router = express.Router();

router.get('/expenses', userauthentication.authenticate ,addexpenseController.getexpense)

router.post('/addexpense',addexpenseController.postaddExpense)

router.delete('/delete/:Id',addexpenseController.deleteExpenses)


module.exports = router