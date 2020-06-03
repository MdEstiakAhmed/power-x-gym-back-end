var express = require('express');
var order_number = require.main.require('./models/order');
var router = express.Router();

router.get('/', function(request, response){
    response.send("empty");
});

router.get('/getOrderNo', function(request, response){
    order_number.getOrderNo(function(results){
        response.send(results.order_no);
    });
});

module.exports = router;