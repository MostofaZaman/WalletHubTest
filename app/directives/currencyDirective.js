define([], function () {
    function currencyDirective() {
        function format2(n, currency) {
            return currency + " " + n.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }

        function currency(number) {
            if (!number) { return ''; }
            number = String(number);
            
            var formattedCurrency = format2(number, "$");
           

            return formattedCurrency;
        }
        return {
            restrict:'E',
            scope: {
                currencyPlaceholder: '=placeholder',
                currencyModel: '=model'
            },
            template: '<input ng-model="inputValue" placeholder={{currencyPlaceholder}} type="tel" class="phonenumber">',
            link: function (scope, el, attrs) {
                //el.val($filter('currency')(scope.amount));

                scope.inputValue = scope.currencyModel;
                scope.$watch('inputValue', function (value, oldValue) {

                    value = String(value);
                    var number = value.replace(/[^0-9]+/g, '');
                    scope.currencyModel = number;
                    scope.inputValue = currency(number);
                });
            }
        }
    }
    return currencyDirective;
})
