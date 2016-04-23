(function () {
    'use strict';

    function mainCtrl($scope) {
        function init() {
            $scope.navigationTemplate = "AngularApp/app/main/navbar.tpl.html";
            $scope.brandName = "eSales";
            $scope.tabs = [
              { display: "Home", name: "home", template: "AngularApp/app/home/home.tpl.html" },
              { display: "Apparels", name: "apparels",template:"AngularApp/app/sections/apparels.tpl.html" },
              { display: "Gadgets", name: "gadgets", template: "AngularApp/app/sections/gadgets.tpl.html" },
              { display: "Appliances", name: "appliances", template: "AngularApp/app/sections/appliance.tpl.html" }
            ];
            $scope.loadLogin();
        }

        $scope.loadView = function (item) {
            $scope.contentTemplate = item.template;
        };
        $scope.loadLogin = function () {
            $scope.contentTemplate = "AngularApp/app/login/login.tpl.html"
        }
        init();
    }
    angular.module("amazingSales")
           .controller("mainCtrl", ["$scope", mainCtrl])


})();