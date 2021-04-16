/*
============================================
; Title: Assignment 3.4
; Author: Professor Cross
; Date: 04 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the 
; use of Node.js with Express to display
; multiple views.
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
const { response } = require('express');

// Create app variable
var app = express();

// Tell Express the views are in the 'views' directory.
app.set('views', path.resolve(__dirname, 'views'));

// Tell Express to use EJS view engine.
app.set('view engine', 'ejs');

app.use(logger('short'));

// Routes
app.get('/index', function(request, response){
    response.render('index',{
        message: "home page"
    });
});

app.get('/about', function(request, response){
    response.render('about',{
        message: "about page"
    });  
});

app.get('/contact', function(request, response){
    response.render('contact',{
        message: "contact page"
    });  
});

app.get('/products', function(request, response){
    response.render('products',{
        message: "products page"
    });  
});


// Create server on port 8080.
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});