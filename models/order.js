const MongoClient = require('mongodb').MongoClient;

module.exports = {
    getOrderNo:function(callback){
        client = new MongoClient(process.env.DB_PATH, { useNewUrlParser: true }, { useUnifiedTopology: true });
        client.connect(err => {
            const collection = client.db("power-x-gym").collection("order_serial");
            collection.find().toArray((err, documents)=>{
                if(err){
                    callback(err);
                }
                else{
                    callback(documents[0]);
                }
            });
            client.close();
        });
    },
    addPurchase:function(userData, callback){
        let client = new MongoClient(process.env.DB_PATH, { useNewUrlParser: true }, { useUnifiedTopology: true });
        client.connect(err => {
            const collection = client.db("power-x-gym").collection("purchase");
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