var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Simple Web Application through the Docker server');
});

app.listen(80, function () {
  console.log('Simple Web Application running on port 80!');
});