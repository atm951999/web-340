/*
============================================
; Title: Assignment 7.2
; Author: Professor Cross
; Date: 02 May 2021
; Modified By: Angela Martin
; Description: This program demonstrates the 
; use of Node.js.
;===========================================
*/

// Create the assert variable
var assert = require('assert');

describe('String#split', function() {

    it('should return an array of fruits', function() {

        assert(Array.isArray('Apple,Orange,Mango'.split(',')));

    });

});