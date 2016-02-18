'use strict';

var Connection = function(io, connection) {
	this.io = io;
	this.connection = connection;
	this.ip = 0;
	this.onAuth_callback = 0;
}

Connection.prototype.create = function() {
	var self = this;
	self.ip = self.connection.handshake.address;
}

// Runs when the authentication login 
// is requested.
Connection.prototype.onAuth = function(callback) {
	var self = this; 
	this.onAuth_callback = callback;
}

Connection.prototype.getIP = function() {
	return this.ip;
}

module.exports = Connection;