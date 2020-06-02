const MongoClient = require('mongodb').MongoClient;

module.exports = {
    getAll:function(callback){
        client = new MongoClient(process.env.DB_PATH, { useNewUrlParser: true }, { useUnifiedTopology: true });
        client.connect(err => {
            const collection = client.db("power-x-gym").collection("user");
            collection.find().toArray((err, documents)=>{
                if(err){
                    callback(err);
                }
                else{
                    callback(documents);
                }
            });
            client.close();
        });
    },
    getByKey:function(userKey, callback){
        let client = new MongoClient(process.env.DB_PATH, { useNewUrlParser: true }, { useUnifiedTopology: true });
        client.connect(err => {
            const collection = client.db("power-x-gym").collection("user");
            collection.find({key: userKey}).toArray((err, documents)=>{
                if(err){
                    callback(err);
                }
                else{
                    callback(documents);
                }
            });
            client.close();
        });
    },
    addUser:function(userData, callback){
        let client = new MongoClient(process.env.DB_PATH, { useNewUrlParser: true }, { useUnifiedTopology: true });
        client.connect(err => {
            const collection = client.db("power-x-gym").collection("user");
            collection.insertOne(userData, (err, result)=>{
                if(err){
                    callback(false);
                }
                else{
                    callback(result.ops[0]);
                }
            });
            client.close();
        });
    }
}