'use strict';

define(["config", "app"], function(config, App) {

	var socket;
	
	return {

		connect: function() {
			socket = io.connect(config.ServerHost);

			// Has the client been accepted. 
			// We check this to handle IP Bans
			// etc.
			socket.on('connect_accepted', function(result) {

				// Checks if the connection is accepted.
				if ( !result.accepted ) {
					App.showAlert("conn_not_accepted", true, result.message);
					socket.close();
				}
			});

			// Has the clietn disconnected from the server?
			socket.on('disconnect', function() {
				App.showAlert("server_disconnect", true);
				socket.close();
			});

			// Has there been an error with the server connection.
			socket.on('connect_error', function() {
				App.showAlert("server_error", true);
				socket.close()
			});
		},

		send: function(tag, data) {
			socket.emit(tag, data);
		},

		listen: function(tag, callback) {
			socket.on(tag, callback);
		}
	}
});