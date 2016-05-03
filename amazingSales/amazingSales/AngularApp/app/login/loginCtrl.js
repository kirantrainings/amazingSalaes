(function () {
    'use strict';
    var loginCtrl = function ($scope,loginSvc) {
        function init(){
            $scope.login = {
                UserName: "",
                Password: "",
            };
        }
        $scope.loginUser = function () {
            loginSvc.authenticateUser($scope.login)
                   .then(function (response) {
                       console.log(response);
                   })
                   .catch(function (response) {
                       console.log(response);
                   });
        };

        init();
    };
    angular.module('amazingSales.login')
           .controller("loginCtrl", ["$scope", "loginSvc",
               loginCtrl]);
})();

//in this example homeCtrl is dependent
//$scope is a service 