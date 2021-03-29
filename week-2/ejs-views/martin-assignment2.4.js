/*
============================================
; Title: Assignment 2.4
; Author: Professor Cross
; Date: 28 March 2021
; Modified By: Angela Martin
; Description: Node.js - Exercise 2.4 EJS Views
;===========================================
*/

// Create http variable.
var http = require("http");

// Create express variable
var express = require("express");

// Create path variable.
var path = require("path");

// Create app variable.
var app = express();

//Tell Express the views are in the 'views' directory.
app.set("views", path.resolve(__dirname, "views"));  

//Tell Express to use EJS view engine.
app.set("view engine", "ejs");  

app.get("/", function(request, response){
    // Render index file.
    response.render("index",{
        firstName: "Angie",
        lastName: "Martin",
        address: "789 Hollywood Blvd."
    });
});

// Create server on port 8080.
http.createServer(app).listen(8080, function(){
    console.log("EJS-Views app started on port 8080");
});

