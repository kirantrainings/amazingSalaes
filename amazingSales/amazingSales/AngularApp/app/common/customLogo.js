(function () {
    var customLogoFn = function () {
        //directive always returns an object
        var directiveObj = {};
        //1. property
        //E - stands for element.
        // in the html <custom-logo></custom-logo>
        directiveObj.restrict = 'E,A';
        //2. Property -template
        directiveObj.template = "{{logoName}}";

        directiveObj.scope = {
            logoName:'@'//one way communication
        };
        return directiveObj;
    };
    angular.module('amazingSales.common')
    .directive('customLogo',[customLogoFn])
})()