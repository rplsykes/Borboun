var Auth = require('./services/auth.js');

module.exports = {

	"EventRegistry": { 
		"auth_validate" : { callback: Auth.validate }
	}
};