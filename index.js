// declaration start
let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let mongoDBClient = require('mongodb').MongoClient;
let dotEnv = require('dotenv').config();
// declaration end

// instance start
let app = express();
// instance end

// project middleware start
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
// project middleware end

// test declaration start
var test = require('./controllers/testController/test');
// test declaration end

// test middleware start
app.use('/', test);
app.use('/testData', test);
// test middleware end

//server setup start
var serverPort=3000;
app.listen(serverPort, function(){
    console.log("project server started at: ", serverPort);
});
// server setup end