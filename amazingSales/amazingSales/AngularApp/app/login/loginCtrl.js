(function () {
    'use strict';
    var loginCtrl = function ($scope) {
        function init(){
            $scope.login = {
                UserName: "",
                Password: "",
            };
        }
        $scope.loginUser = function () {
           
        };

        init();
    };
    angular.module('amazingSales.login')
           .controller("loginCtrl", ["$scope", loginCtrl]);
})();

//in this example homeCtrl is dependent
//$scope is a service 