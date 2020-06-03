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

router.post('/addPurchase', function(request, response){
    order_number.addPurchase(request.body, function(result){
        response.send(result);
    });

    
});

router.post('/updateOrderId', function(request, response){
    order_number.updateOrderId(10005, function(result){
        let order = request.body.order_no;
        order = order+1;

        order_number.updateOrderId(order, function(result){
            response.send(result);
        });
    });
});

module.exports = router;