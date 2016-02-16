'use strict';

define(["server"], function(Server) {

	return {
		
		// Pass credentials and create a callback
		// if successful or failed. 
		login: function(credentials, successCallback, failedCallback) {

			if ( !credentials ) {
				throw "No credentials given.";
			}

			Server.connect();

			// Pass login data to server.
			Server.send('login', credentials);

			// Now we listen for any responses from the
			// server.
			Server.listen('login', function(result) {

				if ( !result ) {
					// Failed to find user. Call failed. 
					failedCallback();
					return;
				}

				//otherwise we found the user. Call success.
				successCallback(result);
			});

		}
	};
});