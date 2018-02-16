var path = require("path");

//need to do a module.export
module.exports = function(app){
//direct user to home
    app.get("/home", function(request, response){
        response.sendFile(path.join(__dirname, "../public/home.html"));
    });
    //direct user to survey
    app.get("/survey", function(request, response){
        response.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    //if no matching route, default to home
    app.get("*", function(request, response){
        response.sendFile(path.join(__dirname, "../public/home.html"));
    });
};