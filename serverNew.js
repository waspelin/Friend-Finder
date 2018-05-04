//require everything
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//var routes = require('./routing/apiRoutes');
//invoke the express application
var app = express();
//define port as either the environment's PORT or 3000
var PORT = process.env.PORT || 3000;

//set up the body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require('./routing/apiRoutes');
app.use(routes);

// //create a sample get request to the home page
// //comment out later
// //app.get and then the route and then the callback f(x)
// //within callback f(x), include req, res params
// //moving routes to apiRoutes.js and htmlRoutes.js
// app.get('/', function(req, res){
//     console.log("Successful GET Request");
//     //get request successful -WA

//     //invoke res end to make sure it doesnt keep loading
//     res.end(); // successful res end -WA
// });
// //create dummy /api get request
// app.get('/api', function(req, res){
//     console.log("GET Request w. info");
//     //get request successful -WA

//     //invoke res send to make sure info is being sent
//     res.send({
//         name: "Will"
//         //res.send successful -WA
//     });
// });

//create a listener and include a callback function
//this will remain in the serverNew.js file

app.listen(PORT, function(){
    console.log("Listening for Requests");
    //listener successful -WA
});