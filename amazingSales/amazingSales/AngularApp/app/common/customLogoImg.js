(function () {
    var customLogoImg = function () {
        //Step 1.
        var directiveObj = {};

        //step2. representation or restrict
        // E- Element
        // A- Attribute
        // C- Class
        directiveObj.restrict = "E,A,C";

        //step3. template 

        directiveObj.template = "<img src='../images/logo.jpg' style='height:30px;width:30px'/>";

        return directiveObj;
    };
    angular.module('amazingSales.common')
    .directive('customLogoImg', [customLogoImg])
})()