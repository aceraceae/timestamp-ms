"use strict";
var express = require('express');
var app = express();
var checkTime = require("./checktime.js");
var path = require('path');

app.use(express.static(path.resolve(__dirname)));

app.get('/', function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
	res.end(`Please give me time as a parameter ^^^\n
Note:\n
\tTime should be given as a unix date or natural date. \n
\tIf you give natural date all as numbers, it will expect day-month-year format, instead of month-day-year american date ;) \n
\tOutput for unix date is in seconds, for 'natural' date is 'DD MMMM YYYY'.\n\n
Example unix dates:\t1270850400\t1470610331\t978455632\t1285432346\t777777777\n
Example natural dates:\t24 May 2010\t04-07-2004\t17.11.15\t24 feb, 2013\tjan-03-2016\n
Github repo: https://github.com/aceraceae/timestamp-ms`);
		});

app.get('/:time', function (req, res) {
	var time = req.params.time;
	res.send(checkTime(time));
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
