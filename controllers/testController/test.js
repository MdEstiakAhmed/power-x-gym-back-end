var express = require('express');
var test_data = require.main.require('./models/test');
var router = express.Router();

router.get('/', function(request, response){
    response.send('test successful');
});

router.get('/testData', function(request, response){
    test_data.getAll(function(results){
        response.send(results);
    });
});

module.exports = router;