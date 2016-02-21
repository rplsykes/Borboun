'use strict';

var Users = function(dbConnection) {
	this.dbConnection = dbConnection;
}

// Finds a user based on the credentials passed.
Users.prototype.findByCredentials = function(credentials, callback) {

	this.dbConnection.query('SELECT * FROM users WHERE username = "' + credentials.Username + '" \
					  		 AND password = "' + credentials.Password + '"', 
				function(err, rows, fields) {
					if ( err ) throw err;

					callback(rows[0]);
				});
}

module.exports = Users;