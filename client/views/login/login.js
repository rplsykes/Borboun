define(["jquery", "app", "auth"], function($, App, Auth) {
    
    // Handle login button click.
	$("#loginBtn").click(function() { 

		var credentials = { 
			Username: $("#username").val(),
			Password: $("#password").val()
		};

		// Login via the authentication system.
		Auth.login(credentials, function(result) { 
			console.log(result);
		}, 
		function() { 
			console.log("Failed to login! Invalid Credentials!");
		});

	});
   
});