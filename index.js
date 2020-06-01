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

// var test_data = require.main.require('./models/test');

app.get('/testData', (req, res) =>{
    client = new MongoClient(process.env.DB_PATH, { useNewUrlParser: true }, { useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("power-x-gym").collection("test");
        collection.find().toArray((err, documents)=>{
            if(err){
                console.log(err)
                res.status(500).send({message:err});
            }
            else{
                res.send(documents);
            }
        });
        client.close();
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