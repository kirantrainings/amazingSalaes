(function () {
    'use strict';
    var customDatePicker = function () {
        var directiveObj = {};
        directiveObj.restrict = "A";
        // link function 
        directiveObj.link = function (scope, element, attrs) {
            var config = {};
            if (attrs['maxdate']) {
                config.maxDate = attrs['maxdate'];
            }
            if (attrs['mindate']) {
                config.minDate = attrs['mindate'];
            }
            $(element).datepicker(config);
        };

        return directiveObj;
    };

    angular.module('amazingSales.common')
    .directive('customDatePicker', [customDatePicker])

})();