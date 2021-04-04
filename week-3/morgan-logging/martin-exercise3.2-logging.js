/*
============================================
; Title: Assignment 3.2
; Author: Professor Cross
; Date: 04 April 2021
; Modified By: Angela Martin
; Description: Node.js - Exercise 3.2 - Logging
============================================
*/

// Create express variable.
var express = require('express');

// Create http variable.
var http = require('http');

// Create path variable.
var path = require('path');

// Create logger variable.
var logger = require('morgan');

// Create app variable.
var app = express();

// Tell Express the views are in the 'views' directory.
app.set('views', path.resolve(__dirname, 'views'));

// Tell Express to use EJS view engine.
app.set('view engine', 'ejs');

app.use(logger('dev'));

// Route
app.get('/', function(req, res){
    // Render index file.
    res.render('index', {
        message: "It Works!!!!!!!!!"
    });
});

// Create server on port 3000.
http.createServer(app).listen(3000, function() {
    console.log('Application started and listening on port %s', 3000)
});