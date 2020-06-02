var express = require('express');
var user_data = require.main.require('./models/user');
var router = express.Router();

router.get('/', function(request, response){
    response.send("empty");
});

router.get('/getAllUser', function(request, response){
    user_data.getAll(function(results){
        response.send(results);
    });
});

router.get('/getUser/:key', function(request, response){
    user_data.getByKey(function(result){
        response.send(result);
    });
});

module.exports = router;