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
	}
}