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
var order = require('./controllers/orderController/order');
// declaration end


// middleware start
app.use('/', test);
app.use('/testData', test);
app.use('/', user);
app.use('/getAllUser', user);
app.use('/getUser/:key', user);
app.use('/addUser', user);
app.use('/', order);
app.use('/getOrderNo', order);
app.use('/addPurchase', order);
app.use('/updateOrderId', order);
// middleware end


//server setup start
var serverPort=5000;
app.listen(process.env.PORT || 5000, function(){
    console.log("project server started at: ", serverPort);
});
// server setup end