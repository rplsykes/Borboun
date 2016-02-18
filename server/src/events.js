var Auth = require('./services/auth.js');

module.exports = {

	"EventRegistry": { 
		"auth" : { callback: Auth.validate }
	}
};