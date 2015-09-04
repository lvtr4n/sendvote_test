var gzippo = require('gzippo');
var express = require('express');
var app = express();

var morgan = require("morgan");
app.user(morgan('combined'));

app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
