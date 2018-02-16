//require all of the different npm's
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// have the application run express
var app = express();
//define the Port
var port = 3000;

//this is a route to the home page
app.get("/", function(request, response){
    response.send("This is the home page");
});

//this is a route to the survey page
app.get("/survey", function(request, response){
    response.send("This is the survey page");
});

//the app listener will tell me exactly how i am connected to the server
app.listen(port, function(){
    console.log("Connected to Port: " + port);
});
