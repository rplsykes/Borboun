'use strict';

var Connection = function(io, connection) {
	this.io = io;
	this.connection = connection;
	this.ip = 0;
}

Connection.prototype.create = function() {
	var self = this;
	self.ip = self.connection.handshake.address;
}

Connection.prototype.onAuth = function() {

}

Connection.prototype.getIP = function() {
	return this.ip;
}

module.exports = Connection;