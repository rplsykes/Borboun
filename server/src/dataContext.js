var mysql = require('mysql');
var config = require('./config.js');

var Users = require('./repositories/user_repository.js');

// contains the instance of the data context.
var instance = null;

var DataContext = function() {

	this.repos = [];

	this.connection = mysql.createConnection({
		  host     : config.Database.Host,
		  user     : config.Database.User,
		  password :  config.Database.Password,
		  database : config.Database.Database
		});

	this.connection.connect();
	console.log("Database connection successful!");

	this.bind("users", new Users(this.connection));

	instance = this;
}

DataContext.prototype.bind = function(repo, instance) {
	this.repos[repo] = instance;
}

DataContext.prototype.get = function(repo) {
	return this.repos[repo];
}

// singleton get instance
function getInstance() {
	if ( !instance ) {
		return new DataContext();
	}

	return instance;
}

module.exports = getInstance();