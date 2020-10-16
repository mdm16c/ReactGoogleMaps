//dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var server = http.Server(app);

//setup file paths
app.set('port', 8080);
app.use('/static', express.static(__dirname + '/static'));
app.use('/css', express.static(__dirname + '/css'));

//routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

//start server
server.listen(8080, function() {
  console.log('Starting server on port 8080');
});