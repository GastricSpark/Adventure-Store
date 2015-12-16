/**
 * angular/app/weapons/weapon.js
 * Created by HWhewell on 15/12/2015.
 */
(function(){

    angular
        .module('app.controllers')
        .controller('WeaponController', WeaponController);

    WeaponController.$inject = ['WeaponService'];

    function WeaponController(WeaponService){
        var vm = this;

        vm.response = vm.getWeapons;

        vm.getWeapons = WeaponService.getAllWeapons(function(success){
            vm.response = success.data;
        },function(error){
            vm.response = error;
        });
    }

}());