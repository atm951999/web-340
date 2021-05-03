/*
============================================
; Title: Assignment 7.4
; Author: Professor Cross
; Date: 02 May 2021
; Modified By: Angela Martin
; Description: This program demonstrates the 
; use of Node.js.
;===========================================
*/

// Create mongoose variable
var mongoose = require("mongoose");

// Create Schema variable
var Schema = mongoose.Schema;

// Create employeeSchema variable
var employeeSchema = new Schema({
    firstName: { type: String, required: true, unique: true},
    lastName: { type: String, required: true, unique: true},

});

// Create employee variable
var Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;