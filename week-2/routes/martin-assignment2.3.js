/*
============================================
; Title: Assignment 2.3
; Author: Professor Cross
; Date: 28 March 2021
; Modified By: Angela Martin
; Description: Node.js - Exercise 2.3 Routes
;===========================================
*/

// Create express variable.
var express = require('express');

// Create heep variable.
var http = require('http');

// Create app variable.
var app = express();

// Routes
app.get('/', function(req, res){
    res.end('Welcome to the homepage.\n');
});

app.get('/about', function(req, res){
    res.end('Welcome to the about page.\n');
});

app.get('contact', function(req,res){
    res.end('Welcome to the contact page.\n');
});

app.use(function(req, res)
{
    res.statsCode = 404;
    res.end('404!\n'); // Error for bad requests.
});

// Create server on port 3000.
http.createServer(app).listen(3000, function(){
    console.log('Application started on port %s', 3000);
});