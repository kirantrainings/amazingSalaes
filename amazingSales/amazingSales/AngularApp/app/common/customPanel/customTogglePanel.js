(function () {
    'use strict';
    var customTogglePanel = function () {
        var directiveObj = {};
        directiveObj.restrict = "A";
        directiveObj.templateUrl = "AngularApp/app/common/customPanel/custompanel.tpl.html";
        // link function 
        directiveObj.link = function (scope, element, attrs) {
            console.log(scope);
            console.log(element);
            console.log(attrs);
            var ele = $(element).find('.panel-heading');
            var panelBody = $(element).find('.panel-body');
            if (ele) {
                $(ele).bind('click', function () {
                    console.log("user Clicked me");
                    $(panelBody).toggle();
                });
            }
        };

        return directiveObj;
    };

    angular.module('amazingSales.common')
    .directive('customTogglePanel',[customTogglePanel])

})();