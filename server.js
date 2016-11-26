var express = require('express');
var http = require('http');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(__dirname + '/'));

app.use(function(req, res, next) {
	res.status(404).send('Sorry cant find that!');
});

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

app.listen(8080, function () {
  console.log('http://localhost:8080/');
});