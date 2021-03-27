/*
============================================
; Title: Assignment 1.5
; Date: 21 March 2021
; Modified By: Angela Martin
; Description: Node.js Server
;===========================================
*/

// Variable declaration.
var http = require("http");
// Process request function with arguments.
function processRequest(req, res){
    // Message string.
    var body = "This is going to work!!!";
        var contentLength = body.length;
        res.writeHead(200,{
            'Content-Length':contentLength,
            'Content-type':'text/plain'
        });
        res.end(body);
}
// variable to create server.
var s = http.createServer(processRequest);
s.listen(8080);