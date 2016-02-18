'use strict';

define(["config", "app"], function(config, App) {

	var socket;

	return {

		connect: function() {

			socket = io.connect(config.ServerHost);
			this.send("auth", { "username" : "test", "password" : "password" });
		},

		send: function(tag, data) {
			socket.emit(tag, data);
		},

		listen: function(tag, callback) {
			socket.on(tag, callback);
		}
	}
});