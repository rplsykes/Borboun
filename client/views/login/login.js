define(["jquery", "app", "auth"], function($, App, Auth) {
    
    // Handle login button click.
    $('#login_form').submit(function(e) {
        
        e.preventDefault();

		var credentials = { 
			Username: $("#username_fld").val(),
			Password: $("#password_fld").val()
		};

        if ( !credentials.Username || !credentials.Password ) {
            App.showAlert("empty_login");
            //alert("No username or password has been provided!");
            return;
        }

		// Login via the authentication system.
		Auth.login(credentials, function(result) { 
			App.routeTo("game");
		}, 
		function() { 
			App.showAlert("invalid_user");
		});

	});
   
});