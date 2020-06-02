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
    getByKey:function(){
        let client = new MongoClient(process.env.DB_PATH, { useNewUrlParser: true }, { useUnifiedTopology: true });
        const key = req.params.key;   
        console.log(key); 
        client.connect(err => {
            const collection = client.db("power-x-gym").collection("user");
            collection.find({key}).toArray((err, documents)=>{
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
    addUser:function(){

    }
}