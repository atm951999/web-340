/*
============================================
; Title: Assignment 6.4
; Author: Professor Cross
; Date: 28 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the 
; use of Node.js with Express and EJS
===========================================
*/

// Create express variable.
var express = require("express");

// Create http variable.
var http = require("http");

// Create path variable.
var path = require("path");

// Create logger variable.
var logger = require("morgan");

// Create app variable.
var app = express();

// Tell Express the views are in the 'views' directory.
app.set("views", path.resolve(__dirname, "views"));

// Create publicDir and tell Express it is a public directory.
var publicDir = require('path').join(__dirname,'/public');

app.use(express.static(publicDir)); 

// Tell Express to use EJS view engine.
app.set("view engine", "ejs");

app.use(logger("short"));

// Route
app.get("/", function (request, response) {

    response.render("index", {

        title: "Home page"

    });

});

// Create server on port 8080.
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});