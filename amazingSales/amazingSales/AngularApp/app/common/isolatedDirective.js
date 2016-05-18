(function () {
    var isolatedDir = function () {
        //directive always returns an object
        var directiveObj = {};
        directiveObj.restrict = 'A';
        directiveObj.templateUrl = 'AngularApp/app/sections/isolated.tpl.html';
        directiveObj.scope = {
            title: "@",//@ symbol denotes oneway communication
            content: "="// = symbol denotes two way communication
        };
        return directiveObj;
    };
    angular.module('amazingSales.common')
    .directive('isolatedDir', [isolatedDir])
})()