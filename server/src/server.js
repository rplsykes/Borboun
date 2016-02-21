'use strict';

var url  = require('url');
var http = require('http').createServer();
var Config = require('./config.js');
var Events = require('./event_registry.js');

var Server = function(dbConnection) 
{
	this.io = null;
	this.dbConnection = dbConnection; 
}

// Create a new server instance.
Server.prototype.create = function() 
{
	var self = this;

	this.io = require('socket.io')();
	var middleware = require('socketio-wildcard')();

	this.io.use(middleware);
}

// Called when a connection is made to the server.
Server.prototype.onConnect = function(callback) 
{
	this.connection_callback = callback;
}

// Called when a connection is disconnected from the database.
Server.prototype.onDisconnect = function(callback) 
{ 
	this.disconnect_callback = callback;
}

Server.prototype.send = function(tag, data) 
{
	this.io.emit(tag, data);
}

// Listens for incoming events and queries
// the event registry for the function call.
Server.prototype.listen = function() 
{

	var self = this;

	this.io.on('connection', function(socket) 
	{
		socket.on('*', function(event) 
		{
			
			var eventKey = event.data[0];
			var params = event.data[1];

			Events.EventRegistry[eventKey].callback(params, self);
			
		});
	});


	this.io.listen(Config.Server.Port);
}

module.exports = Server;