var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views")); //Tell Express the views are in the 'views' directory. 

app.set("view engine", "ejs"); //Tell Express to use EJS view engine. 

app.get("/", function(request, response){
    response.render("index",{
        firstName: "Angie",
        lastName: "Martin",
        address: "789 Hollywood Blvd."
    });
});

http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080");
});

