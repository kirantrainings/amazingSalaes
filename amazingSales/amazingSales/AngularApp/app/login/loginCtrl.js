(function () {
    'use strict';
    var loginCtrl = function ($scope) {
        function init(){
            $scope.login = {
                username: "",
                password: "",
                rememberMe: false
            };
        }
        $scope.loginUser = function () {
            console.log($scope.login);
        };

        init();
    };
    angular.module('amazingSales.login')
           .controller("loginCtrl", ["$scope", loginCtrl]);
})();

//in this example homeCtrl is dependent
//$scope is a service 