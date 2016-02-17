define(["jquery", "createjs", "app"], function($, createjs, App) {
    
	// On startup of the app.
	// Load out assets from the manifest.
	var preload = new window.createjs.LoadQueue();
	preload.loadManifest("config/manifest.json");
	preload.on("complete", initGame, this);

	function initGame() {

		// hide the alert box.
		$("#alert-box").hide();

		// init the application.
		App.init(preload);
	}

});