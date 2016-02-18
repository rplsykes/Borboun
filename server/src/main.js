'use strict';

var Server = require('./server.js');
var mysql = require('mysql');
var config = require('./config.js');
var Events = require('./events.js');

function main() {

	// Create a mysql connection.
	var connection = mysql.createConnection({
		host: config.Database.Host,
		user: config.Database.User,
		pass: config.Database.Password,
		databse: config.Database.Databse
	});

	connection.connect();

	// Create a new server.
	var server = new Server();
	server.create();

	console.log("");
	console.log("Server has been started.");
	console.log("");
	console.log("CTRL + C to stop the server.");

	// Get the server to listen for events and map
	// that to the event callback.
	// console.log(Events.EventRegistry["auth"].callback());
	server.listen();

	connection.end();
}

main();