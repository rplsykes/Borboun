var Context = require('../dataContext.js');

module.exports = {

	validate: function(credentials, server) 
	{

		if ( !credentials ) 
		{
			throw "No credentials given!";
		}

		console.log(credentials.Username + " has attempted to log in.");

		// Check the credentials against he database.
		Context.get("users").findByCredentials(credentials,
			function(result) 
			{

				if ( result != undefined ) 
				{
					server.send("auth_validate", result);
					console.log(credentials.Username + " has been validated.");
					return;
				}

				server.send("auth_validate", false);
				console.log(credentials.Username + " has been rejected. Incorrect Credentials!");

			});
	}

};
