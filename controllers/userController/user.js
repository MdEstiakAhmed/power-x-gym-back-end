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

module.exports = router;