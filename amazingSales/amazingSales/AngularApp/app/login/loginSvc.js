(function () {
    'use strict';
    var loginSvc = function ($http, $q) {
        this.authenticateUser = function (userDetails) {
            var dfd = $q.defer();
            $http.post("api/Login", userDetails)
                 .then(function (response) {
                     if(response.status==200 && response.statusText=="OK" && response.data.isAuthenticated)
                     {
                         dfd.resolve(response.data)
                     }
                     else {
                         dfd.reject("UnAuthenticated user");
                     }
                 })
                 .catch(function (response) {
                     dfd.reject("Error Occurred");
                 });
            return dfd.promise;
        }
    };
    angular.module('amazingSales.login')
           .service("loginSVc", ["$http","$q", loginSvc]);
})();

