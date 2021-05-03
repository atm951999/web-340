/*
============================================
; Title: Assignment 7.3
; Author: Professor Cross
; Date: 02 May 2021
; Modified By: Angela Martin
; Description: This program demonstrates the 
; use of Node.js.
;===========================================
*/

// Create fruits variable
var fruits = require("../martin-fruits");

// Create chai variable
var chai = require("chai");

// Create assert variable
var assert = chai.assert;

describe("fruits", function() {

    it("should return an array of fruits", function() {

        var f = fruits('Apple,Orange,Mango');

        assert(Array.isArray(f));

    });

});