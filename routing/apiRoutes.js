var express = require('express');
//use router instead of app to invoke express
var router = express.Router();

//GET function to get all friends in db
router.get('api/friends', function(req, res){
    
    res.send({
        //dummy data saying it is a GET req
        type:'GET'
    });
    console.log('Friends Arrived in API form');
});

//POST request to add new friends in db
router.post('api/friends', function(req, res){
    
    res.send({
        //dummy data saying it is a POST req
        type:'POST'
    });
    console.log('Friends Arrived in API form');
});

module.exports = router;


