requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'https://code.jquery.com/jquery-2.2.0',
        config: '/client/config/config',
        routes: '/client/config/routes'
    }
})

define([], function() {
    require(["main"]);
});