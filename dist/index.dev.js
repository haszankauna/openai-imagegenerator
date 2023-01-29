"use strict";

var path = require('path');

var express = require("express");

var dotenv = require('dotenv').config();

var port = 3000;
var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
})); // Set static folder

app.use(express["static"](path.join(__dirname, 'public')));
app.use('/openai', require('./routes/openaiRoutes'));
app.listen(port, function () {
  return console.log("Server started on port ".concat(port));
});
//# sourceMappingURL=index.dev.js.map
