'use strict';

define(["server"], function(Server) {

	return {
		
		// Pass credentials and create a callback
		// if successful or failed. 
		login: function(credentials, successCallback, failedCallback) {

			if ( !credentials ) {
				throw "No credentials given.";
			}
			
			// Pass login data to server.
			Server.send('auth_validate', credentials);

			// Now we listen for any responses from the
			// server.
			Server.listen('auth_validate', function(result) {

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