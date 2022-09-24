const express = require('express');

const forgotPass=require('../controllers/forgotPass');
const router = express.Router();
router.post('/password/forgotpassword',forgotPass.forgotPassword)

module.exports = router
