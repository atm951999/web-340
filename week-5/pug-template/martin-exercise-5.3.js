/*
============================================
; Title: Assignment 5.3
; Author: Professor Cross
; Date: 16 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the 
; use of Node.js with Express and Pug.
;===========================================
*/

// Create express variable.
var express = require("express");

// Create http variable.
var http = require("http");

// Create pug variable.
var pug = require("pug");

// Create path variable.
var path = require("path");

// Create app variable.
var app = express();

// Tell Express the views are in the 'views' directory.
app.set("views", path.resolve(__dirname, "views"));

// Tell Express to use Pug view engine.
app.set("view engine", "pug");

// Route
app.get("/", function(request, response) {

    response.render("index", {

        message: "I am starting to get this stuff!"

    });

});

// Create server on port 8080.
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");
})