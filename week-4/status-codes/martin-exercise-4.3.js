/*
============================================
; Title: Assignment 4.3
; Author: Professor Cross
; Date: 11 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the 
; use of Node.js with Express=
==========================================
*/

// Create express variable.
var express = require("express");

// Create http variable.
var http = require("http");

// Create app variable.
var app = express();

// Routes
app.get("/not-found", function(request, response) {

    response.status(404);

    response.json({

        error: "Resource will never be found."

    })

});

app.get("/ok", function(request, response) {

    response.status(200);

    response.json({

        message: "Page may load correctly."

    })

});

app.get("/not-implemented", function(request, response) {

    response.status(501);

    response.json({

        error: "Page will be implemented when i get around to it."

    })

});

// Create server on port 8080.
http.createServer(app).listen(8080, function() {

   console.log("Application started on port 8080!");

});
