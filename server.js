"use strict";
var express = require('express');
var app = express();
var checkTime = require("./checktime.js");
var path = require('path');



app.use(express.static(path.resolve(__dirname)));

app.get('/', function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Please give me time as a parameter");
		});

app.get('/:time', function (req, res) {
	var time = req.params.time;
	//console.log(time);
	res.send(checkTime(time));

});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});


/*
User Story: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.

User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.

Once you've finished implementing these user stories, click the "I've completed this challenge" button and enter the URLs for both your GitHub repository and your live app running on Heroku.

You can get feedback on your project by sharing it with your friends on Facebook.
*/
