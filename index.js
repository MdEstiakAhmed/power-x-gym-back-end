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

// test declaration start
// var test = require('./controllers/testController/test');
// test declaration end

var test_data = require.main.require('./models/test');

app.get('/testData', function(request, response){
    test_data.getAll(function(results){
        response.send(results);
    });
});


// test middleware start
// app.use('/', test);
// app.use('/testData', test);
// test middleware end

//server setup start
var serverPort=3000;
app.listen(serverPort, function(){
    console.log("project server started at: ", serverPort);
});
// server setup end