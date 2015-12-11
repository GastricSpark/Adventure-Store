/**
 * angular/app.js
 * Created by HWhewell on 07/12/2015.
 */
(function(){
    angular
        .module('app', [
            'app.controllers',
            'app.services',
            'app.directives',
            'app.config',
            'ngRoute'
        ]);

    angular.module('app.controllers', []);
    angular.module('app.services', []);
    angular.module('app.directives', []);
    angular.module('app.config', ['ngRoute']);
}());
/**
 * angular/routes.js
 * Created by HWhewell on 07/12/2015.
 */
(function(){

    angular
        .module('app.config')
        .config(Route);

    function Route($routeProvider, $locationProvider){

        $routeProvider
            .when('/', {
                templateUrl: 'public/views/home/home.html',
                controller: 'HomeController as vm'
            })
            .when('/login',{
                templateUrl: 'public/views/login/login.html',
                controller: 'LoginController as vm'
            })
    }
}());
/**
 * angular/services/CrudService.js
 * Created by HWhewell on 11/12/2015.
 */

/**
 * angular/app/login/login.js
 * Created by HWhewell on 07/12/2015.
 */
(function(){

    angular
        .module('app.controllers')
        .controller('LoginController', LoginController);

    function LoginController(){
        var vm = this;
    }

}());
/**
 * angular/app/home/home.js
 * Created by HWhewell on 07/12/2015.
 */
(function(){

    angular
        .module('app.controllers')
        .controller('HomeController', HomeController);

    function HomeController(){
        var vm = this;
    }

}());