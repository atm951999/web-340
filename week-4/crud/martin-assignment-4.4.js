/*
============================================
; Title: Assignment 4.4
; Author: Professor Cross
; Date: 11 April 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Node.js with Express
===========================================
*/

// Create express variable.
const express = require("express");

// Create http variable.
const http = require("http");

// Create app variable.
let app = express();
app.set("port", process.env.PORT || 3000);

// GET request
app.get("/", function(req, res) {
  res.send("API invoked as an HTTP GET request.");
});


// PUT Request
app.put("/", function(req, res) {
  res.send("API invoked as an HTTP PUT request.");
});


// POST request
app.post("/", function(req, res) {
  res.send("API invoked as an HTTP POST request");
});

// DELETE request
app.delete("/", function(req, res) {
  res.send("API invoked as an HTTP DELETE request");
});

// Create server on port 3000.
http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});
