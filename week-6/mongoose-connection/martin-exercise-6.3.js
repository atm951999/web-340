/*
============================================
; Title: Assignment 6.3
; Author: Professor Cross
; Date: 01 May 2021
; Modified By: Angela Martin
; Description: This program demonstrates the 
; use of Node.js.
;===========================================
*/

// Create Express variable
var express = require('express');

// Create http variable
var http = require('http');

// Create logger variable
var logger = require('morgan');

// Create mongoose variable
var mongoose = require('mongoose');

// Create mongoDB variable
var mongoDB = 'mongodb+srv://admin:admin@buwebdev-cluster-1.o1b9i.mongodb.net/test';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

// Create db variable
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function() {
    console.log('Application connected to MongoDB Compass');
});

// Create app variable
var app = express();
app.use(logger('dev'));

// Create server
http.createServer(app).listen(5000, function() {
    console.log('Application started and running on port 5000');
});
