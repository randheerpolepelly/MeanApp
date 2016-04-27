var express = require('express');
var env= process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();	

app.all('/secret', function (req, res) {
	res.send('gotcha');
})
app.listen('8080');
