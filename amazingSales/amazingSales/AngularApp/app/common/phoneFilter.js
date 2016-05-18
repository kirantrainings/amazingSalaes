(function () {
    var phoneFormatterFn = function () {
        return function (input, criteria) {
            console.log(input);
            
            if (input && input.length == 10) {
                if (criteria == 'US') {
                    return "+1-"+ input.substring(0, 3) + "-" + input.substring(3, 6) + "-" + input.substring(6, 10);
                }
                if(criteria =='IN')
                {
                    return "+91-"+ input.substring(0, 5) + "-" + input.substring(5, 10);
                }
            }
            return input;
        }
    };
    angular.module('amazingSales.common')
    .filter('phoneFormatter',[phoneFormatterFn])
})();