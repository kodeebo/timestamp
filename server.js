var express = require('express');

var app = express();

var port = process.env.PORT || 8080;

  app.route("/").get(function(req, res) {
      //serve index.html, for now just send str
    //res.sendFile(process.cwd() + '/public/index.html');
    res.send("<h1>Welcome to my timestamp microservice</h1>");
  });

app.get('/:str', function(req, res) {
    var result = decodeString(req.params.str);

    res.send(result);
});

var decodeString = function(str) {
    var trimmed = decodeURI(str);
    var unix_date;
    var natural_date;
    
    if(Number(trimmed)) {
        //it is a number
        var number = parseInt(trimmed)*1000;
    }
    
    var date = new Date(number);
    
    if(isNaN(date)) {
        //not a unix number, trying to parse date
        date = new Date(trimmed);
    }
    if(!isNaN(date)) {
        natural_date = date.toDateString();
        unix_date = Date.parse(natural_date);
        
    } else {
        unix_date = null;
        natural_date = null;
    }
    return {
        "unix": unix_date, 
        "natural": natural_date
    } 
}

app.listen(port, function() {
    console.log("listening...");
});