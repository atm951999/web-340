/*
============================================
; Title: Assignment 4.2
; Author: Professor Cross
; Date: 11 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the 
; use of Node.js with Express
===========================================
*/

// Create express variable.
var express = require("express");

// Create http variable.
var http = require("http");

// Create app variable.
var app = express();

// Routes
app.get("/customer/:id", function (request, response) {

    var id = parseInt(request.params.id, 10);

    response.json({

        firstName: "Angie",

        lastName: "Martin",

        email:  "amartin3@woh.rr.com",

        employeeId: id

    });

});

// Create Server on port 8080.
http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});