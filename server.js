//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//Config
app.use(express.static( __dirname + '/public/dist/public' ));  // Alter server.js so that it finds static files within the dist folder of your Angular project
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Database
mongoose.connect("mongodb://localhost/restful_task_API");
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);

//Port
app.listen(8000, function(){
    console.log("Listening on port: 8000");
})