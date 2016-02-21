'use strict';

var Server = require('./server.js');
var config = require('./config.js');
var Events = require('./event_registry.js');

function main() {

	// Create a new server.
	var server = new Server();
	server.create();

	// Get the server to listen for events and map
	// that to the event callback.
	// console.log(Events.EventRegistry["auth"].callback());
	server.listen();

	console.log("");
	console.log("Server has been started.");
	console.log("");
	console.log("CTRL + C to stop the server.");
}

main();