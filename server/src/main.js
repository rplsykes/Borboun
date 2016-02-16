'use strict';

var Server = require('./server.js');

function main() {

	// Create a new server.
	var server = new Server();
	server.create();

	// When a connection is made.
	server.onConnect(function(connection) {
		console.log("Connection from " + connection.getIP());
	});

}

main();