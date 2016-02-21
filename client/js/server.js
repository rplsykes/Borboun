'use strict';

define(["config", "app"], function(config, App) {

	var socket;

	return {

		connect: function() {
			socket = io.connect(config.ServerHost);
		},

		send: function(tag, data) {
			socket.emit(tag, data);
		},

		listen: function(tag, callback) {
			socket.on(tag, callback);
		}
	}
});