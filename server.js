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
	console.log(time);
	//resp = checkTime(time);

	res.send(`Merso`);

});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
