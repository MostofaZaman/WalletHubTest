define([], function () {
    function autotabDirective() {
        return {
            restrict: 'A',
            link: function (scope, element, attr, form) {
                debugger;
                var tabindex = parseInt(attr.tabindex);
                var maxLength = parseInt(attr.ngMaxlength);
                    debugger;
                    element.on('keypress', function (e) {
                        debugger;
                        if (element.val().length > maxLength - 1) {
                            var next = angular.element(document.body).find('[tabindex=' + (tabindex + 1) + ']');
                            if (next.length > 0) {
                                next.focus();
                                return next.triggerHandler('keypress', { which: e.which });
                            }
                            else {
                                //debugger;
                                //var prev = angular.element(document.body).find('[tabindex=' + (tabindex - 1) + ']');
                                //prev.focus();
                                ////return prev.triggerHandler('keypress', { which: e.which });
                                return false;
                            }
                        }
                        return true;
                    });
               

            }
        }
    }
    return autotabDirective;
})
