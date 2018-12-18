//Set the dependencies
var express = require("express");
var path = require("path");

//Set the port of the app
var PORT = process.env.PORT || 8080;

//
var app = express();

app.get("/:", function(req, res) {

}


app.listen(PORT, function() {
    console.log();
}
