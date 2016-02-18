define([], function() {
    
    // Site Routes
	var Routes =  {
        "login":  { template: "/views/login/login.html", 
                    src: "/views/login/login.js" },

        "game" : { template: "/views/game/index.html", 
    			   src: "/views/game/game.js" }
	}

	return Routes;

});