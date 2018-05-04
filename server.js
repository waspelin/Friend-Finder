//require all of the different npm's
var express = require('express');
var bodyParser = require('body-parser');
//moving path to the htmlRoutes.js
//var path = require('path');

// have the application run express
var app = express();
//define the Port, be sure to include the process.env in case there is a custom port
var PORT = process.env.PORT || 3000;

//set up the body parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//this is a route to the home page
//since this works, we can now comment this out and send it into the new files
// app.get("/", function(request, response){
//     response.send("This is the home page");
//     //need to join the html file
//     // result.sendFile(path.join(__dirname, "/public/home.html"));
// });

//ROUTER: HOW WE ARE GOING TO MAP OUR FILES
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//this is a route to the survey page
//since this works, we can now comment this out and send it into the new files
// app.get("/survey", function(request, response){
//     response.send("This is the survey page");
//     //send the survey via json object
//     response.json(survey);
// });

//the app listener will tell me exactly how i am connected to the server
app.listen(PORT, function(){
    console.log("Connected to Port: " + PORT);
});
