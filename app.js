const path = require('path');

const express = require('express');

const app = express();
const cors=require('cors')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors())
const signup=require('./routes/signup')

app.use(signup)

app.listen(8000)