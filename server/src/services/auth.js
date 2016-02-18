module.exports = {

	validate: function(credentials) {

		if ( !credentials ) {
			throw "No credentials given!";
		}
		
		console.log(credentials.username + " has logged in.");
	}

};
