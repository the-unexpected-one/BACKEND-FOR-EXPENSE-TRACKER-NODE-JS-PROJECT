const path = require('path');

const express = require('express');

const signupController = require('../controllers/signup');

const router = express.Router();


router.post('/signUp', signupController.postSignUp);

module.exports = router