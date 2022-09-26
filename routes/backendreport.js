const userauthentication=require('../middleware/auth')

const express = require('express');

const Controller=require('../controllers/backendreports')

const router = express.Router();

router.get('/backendreport',userauthentication.authenticate,Controller.backendreports)

module.exports=router;