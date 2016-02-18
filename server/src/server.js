'use strict';

var url  = require('url');
var http = require('http').createServer();
var Config = require('./config.js');
var Connection = require('./connection.js');
var Events = require('./events.js');

var Server = function() {
	this.connections = [];
	this.io = null;
}

// Create a new server instance.
Server.prototype.create = function() {
	var self = this;

	this.io = require('socket.io')();
	var middleware = require('socketio-wildcard')();

	this.io.use(middleware);
}

// Called when a connection is made to the server.
Server.prototype.onConnect = function(callback) {
	this.connection_callback = callback;
}

// Called when a connection is disconnected from the database.
Server.prototype.onDisconnect = function(callback) { 
	this.disconnect_callback = callback;
}

// Listens for incoming events and queries
// the event registry for the function call.
Server.prototype.listen = function() {

	this.io.on('connection', function(socket) {
		socket.on('*', function(event) {
			
			var eventKey = event.data[0];
			var params = event.data[1];

			Events.EventRegistry[eventKey].callback(params);
			
		});
	});


	this.io.listen(Config.Server.Port);
}

module.exports = Server;