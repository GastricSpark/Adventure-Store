/**
 * angular/app/home/home.js
 * Created by HWhewell on 07/12/2015.
 */
(function(){

    angular
        .module('app.controllers')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['AuthService'];

    function HomeController(AuthService){
        var vm = this;

        vm.isAuthed = function () {
            return AuthService.isAuthed ? AuthService.isAuthed() : false
        };
    }

}());