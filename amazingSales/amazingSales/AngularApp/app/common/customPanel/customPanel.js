(function () {
    var customPanel = function () {
        //Step 1.
        var directiveObj = {};

        //step2. representation or restrict
        // E- Element
        // A- Attribute
        // C- Class
        directiveObj.restrict = "A";

        directiveObj.templateUrl = "AngularApp/app/common/customPanel/custompanel.tpl.html"

        return directiveObj;
    };
    angular.module('amazingSales.common')
    .directive('customPanel', [customPanel])
})()