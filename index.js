// declaration start
let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
// declaration end


// instance start
let app = express();
// instance end


// project middleware start
app.use(cors());
app.use(bodyParser.json());
// project middleware end


// declaration start
var test = require('./controllers/testController/test');
var user = require('./controllers/userController/user');
// declaration end


// middleware start
app.use('/', test);
app.use('/testData', test);
app.use('/', user);
app.use('/getAllUser', user);
// middleware end


//server setup start
var serverPort=5000;
app.listen(process.env.PORT || 5000, function(){
    console.log("project server started at: ", serverPort);
});
// server setup end