(function () {
    'use strict';
    var loginCtrl = function ($scope, loginSvc, $rootScope,authenticateFact) {
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
                       if (response) {
                           response.isAuthenticated = true;
                           authenticateFact.setUserInfo(response);
                           $rootScope.$broadcast('LOGIN_SUCCESS', { userDetails: response });
                       }
                   })
                   .catch(function (response) {
                       console.log(response);
                   });
        };

        init();
    };
    angular.module('amazingSales.login')
           .controller("loginCtrl", ["$scope", "loginSvc","$rootScope","authenticateFact",
               loginCtrl]);
})();

//in this example homeCtrl is dependent
//$scope is a service 