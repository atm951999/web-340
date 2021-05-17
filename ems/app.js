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

// Require
// Create express variable.
var express = require("express");

// Create http variable.
var http = require("http");

// Create path variable.
var path = require("path");

// Create logger variable.
var logger = require("morgan");

// Create helmet variable.
var helmet = require("helmet");

// Create bodyParser variable.
var bodyParser = require('body-parser');

// Create mongoose variable.
var mongoose = require('mongoose');

// Create Employee variable.
var Employee = require("./models/employee");

var cookieParser = require("cookie-parser");
var csrf = require("csurf");

// Create mongoDB variable.
var mongoDB = "mongodb+srv://admin:admin@buwebdev-cluster-1.o1b9i.mongodb.net/test"

mongoose.connect(mongoDB, {

});

mongoose.Promise = global.Promise;

// Create db variable
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {

    console.log("Application connected to MongoDB instance");

});

// Create app variable.
var app = express();

// setup csurf protection
var csrfProtection = csrf({cookie: true});

// Tell Express the views are in the 'views' directory.
app.set("views", path.resolve(__dirname, "views"));

// Create publicDir and tell Express it is a public directory.
var publicDir = require('path').join(__dirname,'/public');

app.use(express.static(publicDir)); 

// Tell Express to use EJS view engine.
app.set("view engine", "ejs");

app.set("port", process.env.PORT || 8080)

// Use statements.
app.use(logger("short"));

app.use(helmet.xssFilter());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});

// Route
app.get("/", function (request, response) {

    response.render("index", {

        title: "Home page",
        message: "XSS Prevention Example"
    });

});

//get the contact file. 
app.get('/new', function(request, response){
    response.render('new',{
        title: "New",
        message: "Enter your first and last name"
    });
});


app.post("/process", function(request, response) {
    console.log(request.body);
     // console.log(request.body.txtName);
   if (!request.body.firstName) {
        response.status(400).send("Entries must have a first name");
        return;
    }

    if (!request.body.lastName) {
        response.status(400).send("Entries must have a last name");
        return;
    }
    // get the request's form data
    var firstName = request.body.firstName;
    var lastName = request.body.lastName;
    
    // Create an employee model
    var employee = new Employee({
        firstName: firstName,
        lastName: lastName
    });
    // save
    employee.save(function (error) {
        if (error) throw error;
        console.log(firstName + lastName + " saved successfully!");
    });
    response.redirect("/");
});


// Get statements
app.get("/list", function(request, response) {
    Employee.find({}, function(error, employees) {
        if (error) throw error;
        response.render("list", {
            title: "Employee List",
            employees: employees
        });
    });
});

app.get("/view/:queryName", function (request, response) {
    var queryName = request.params.queryName;
    Employee.find({'firstName': queryName}, function(error, employees) {
        if (error) throw error;
        if (employees.length > 0) {
            response.render("view", {
                title: "Employee Record",
                employee: employees
            })
        }
        else {
            response.redirect("/list")
        }
    });
});

// Create server on port 8080.
http.createServer(app).listen(app.get("port"), function() {

    console.log("Application started on port" + app.get("port"))

});