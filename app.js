const fs = require('fs');
const port = 9000;
var express = require("express");
var app = express();

app.use(express.static('public'));


app.get('/', function(req, res){
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	fs.readFile('index.html', function(error, data) {
		if (error) {
			res.writeHead(404);
			res.write("Error: File not found");
		}
		else {
			res.write(data);
		}
		res.end();
	});


});

app.listen(port, function(error) {
	if (error) {
		console.log("Can't connect to server", error);
	}
	else {
		console.log("Server is listening on port " + port);
	}
});


