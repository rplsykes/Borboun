requirejs.config({
	baseUrl: 'js',
	paths: {
		jquery: 'https://code.jquery.com/jquery-2.2.0',
		config: '/config/config'
	}
})

define(["config"], function() {
	
	require(["home"]);
});