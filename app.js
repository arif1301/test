const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

require ('dotenv/config');

const routerupload = require('./routes/upload');


app.use(bodyParser.json());

app.use('/upload', routerupload);

app.get('/', (req, res)=>{
    res.send('Hello World');
});

mongoose.connect(process.env.DB_CONNECTION , { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connect to database!!');

app.listen('3000');