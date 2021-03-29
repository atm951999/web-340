
/*
============================================
; Title: Assignment 2.2
; Author: Professor Cross
; Date: 28 March 2021
; Modified By: Angela Martin
; Description: Node.js - Exercise 2.2 Hello World with Express
;===========================================
*/

// Create express variable.
var express = require('express');

// Create http variable.
var http = require('http');

// Create app variable.
var app = express();


app.use(function(req, res)
{
    // Output string to console.
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n');
})

// Create server on port 8080.
http.createServer(app).listen(8080, function()
{   
    // Output string to console.
    console.log('Application started on port %s', 8080);
});
    
