var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up express
var app = express();
var port = 3000;

// Set up bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());