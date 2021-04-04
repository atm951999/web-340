/*
============================================
; Title: Assignment 3.3
; Author: Professor Cross
; Date: 04 April 2021
; Modified By: Angela Martin
; Description: Node.js - Exercise 3.3 -
; Advanced Routing
;===========================================
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
app.get('/:employeeId', function(req, res){
    var employeeId = parseInt(req.params.employeeId, 10);

    // Render index file.
    res.render('index', {
        employeeId: employeeId
    });
});

// Create server on port 3001.
http.createServer(app).listen(3001, function() {
    console.log('Application started and listening on port %s', 3001)
});