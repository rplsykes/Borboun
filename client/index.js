requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'https://code.jquery.com/jquery-2.2.0',
        config: '/config/config',
        routes: '/config/routes'
    }
})

define(["jquery"], function(jquery) {
    $("#alert-box").hide();
    require(["main"]);
});