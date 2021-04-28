// require
var express = require('express');
var http = require('http');
var logger = require('logger');
var mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://atm951999:Peanut123@buwebdev-cluster-1.o1b9i.mongodb.net/test';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function() {
    console.log('Application connected to MongoDB Compass');
});

var app = express();
app.use(logger('dev'));

http.createServer(app).listen(5000, function (){
    console.log('Application started and listening on port 5000');
});