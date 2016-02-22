define([], function() {
    
    // Site Routes
	var Routes =  {
        "login":  { template: window.location + "/views/login/login.html", 
                    src: window.location + "/views/login/login.js" },

        "game" : { template: window.location + "/views/game/index.html", 
    			   src: window.location + "/views/game/game.js" }
	}

	return Routes;

});