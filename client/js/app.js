'use strict';

define(["jquery", "config", "routes"], function($, config, Routes) {

	var assets = null;

	return {

		// Initializes the application
		init: function(assetsList) {
			assets = assetsList;
			this.routeTo("login");
		},

		// Grabs the site assets.
		getAssets: function() {
			return assets;
		},

		// Gets a particular phrase from the locale.
		getPhrase: function(phrase) {

			var phrase = assets.getResult(config.Language)[phrase];

			if ( phrase == undefined ) {
				return "Error! Invalid Phrase!";
			}
			else return phrase;
		},

		// shows an alert on the screen.
		showAlert: function(phrase, showOK, optionalText, callback) {

			var phrase = this.getPhrase(phrase);

			$("#alert-box p").html(phrase);

			if ( optionalText != "" ) {
				$("#alert-box p").append(optionalText);
			}

			$("#alert-box").show();

			if ( showOK ) {
				$("#alert-ok").show();
			}
		},
        
        // Routes to a new page. Defined
        // in the routes file.
        routeTo: function(route) {
            if ( !route ) {
                throw "No route given!";
            }
            
            $("#content").load(Routes[route].template);
            
            if ( Routes[route].src != undefined ) {
                require([Routes[route].src]);
            }
        }
	};
}); 