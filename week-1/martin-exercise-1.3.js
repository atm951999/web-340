/*
=======================================
;Title: Assignment 1.3
;Author: Angela Martin
;Date: 03/21/2021
;Description: Week-1 Modules
=======================================
*/

var url = require('url');

var parsedURL = url.parse('https://github.com/atm951999?name=atm951999');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);