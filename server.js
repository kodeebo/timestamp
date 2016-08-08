var express = require('express');

var app = express();

app.get('/', function(err, res) {
res.send("Hello world!");
});

app.listen('8080', function() {
    console.log("listening...");
});