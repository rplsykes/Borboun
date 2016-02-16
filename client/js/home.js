define(["jquery", "app","auth"], function($, App, Auth) {

	var preload;

	// Loads the game assets and predefined settings.
	var loadApp = function() {
		$(document).ready(function() {

			// Load out assets from the manifest.
			preload = new createjs.LoadQueue();
			preload.loadManifest("config/manifest.json");
			preload.on("complete", initGame, this);

			preload.on("progress", function(e) {
				$("#alert-text").html("Loading - " + (e.progress * 100));
				$("#alert").show();
			});
		});
	}

	// Starts the logic for the game.
	var initGame = function() {

		$("#alert").hide();
		
		// Create a new application
		App.setAssets(preload);

		// On login button pressed. 
		$("#login-btn").click(function(e) {
			e.preventDefault();

			var credentials = {
				username: $("#loginUsername").val(),
				password: $("#loginPassword").val()
			}

			// No username or password have been provided.
			if ( !credentials.username || !credentials.password ) {
				App.showAlert("empty_login", true);
				return;
			}
			else {

				// Now log that user in.
				Auth.login(credentials, 
					function(data) {
						$("#login").hide();
						$("#game").show();
						$("#game #user").html(data[0].username);

						initCanvas();
					}, 
					function(){
						app.showAlert("invalid_user", true);
					});
			}
		});

		// Cancel any errors. 
		$("#alert-ok").click(function(e) {
			$("#alert").hide();
		});
	}
	
	// loads the canvas element
	var initCanvas = function() 
	{
		var stage = new createjs.Stage("gameCanvas");

		var bitmap = new createjs.Bitmap(preload.getResult("gold_pile"));
		bitmap.width = 32;
		bitmap.height = 32;


		stage.addChild(bitmap);
		stage.update();
	}

	loadApp();
});