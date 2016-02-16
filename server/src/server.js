'use strict';

var url  = require('url');
var http = require('http').createServer();
var Config = require('./config.js');
var Connection = require('./connection.js');
var _ = require('underscore');

var Server = function() {

	this.connections = [];
	this.io = null;
}

Server.prototype.create = function() {

	var self = this;

	console.log(Config.Server.Name);
	console.log(Config.Server.Version);
	console.log("");
	console.log("Server has been started.");
	console.log("Listening on port " + Config.Server.Port);
	console.log("");
	console.log("CTRL + C to stop the server.");

	http.listen(Config.Server.Port);
	this.io = require('socket.io')(http);

	this.io.on('connection', function(connection) {

		if ( self.connection_callback) {
			var newConnection = new Connection(self.io, connection);
			newConnection.create();

			self.connection_callback(newConnection);
		}

	});
}

// Called when a connection is made to the server.
Server.prototype.onConnect = function(callback) {
	this.connection_callback = callback;
}

Server.prototype.onError = function(callback) {
	callback();
}

Server.prototype.addConnection = function(connection) {
	this.connections.push(connection);
}

Server.prototype.removeConnection = function(connection) {

}

Server.prototype.getConnectionCount = function() {
	return this.connections.length;
}

Server.prototype.listen = function(event, callback) {
	this.io.on(event, callback());
}

module.exports = Server;