define([], function () {
    function thirdCtrl($scope) {

        $scope.getCursorPos = function ($event) {
            debugger;
            var myEl = $event.target;
            $scope.doGetCaretPosition(myEl);
        };

        $scope.doGetCaretPosition = function (oField) {
            debugger;
            // Initialize
            var iCaretPos = 0;

            // IE Support
            if (document.selection) {

                // Set focus on the element
                oField.focus();

                // To get cursor position, get empty selection range
                var oSel = document.selection.createRange();

                // Move selection start to 0 position
                oSel.moveStart('character', -oField.value.length);

                // The caret position is selection length
                iCaretPos = oSel.text.length;
            }

                // Firefox support
            else if (oField.selectionStart || oField.selectionStart == '0')
                iCaretPos = oField.selectionStart;
            if (iCaretPos == 0 && ($("#tabinputTwo").val() > 0) && oField.attributes.tabindex.value == 2) {
                var tabinputOne = $("#tabinputOne");
                tabinputOne
                  .putCursorAtEnd() // should be chainable
                  .on("focus", function () { // could be on any event
                      tabinputOne.putCursorAtEnd()
                  });
            }
            if (iCaretPos == 0 && ($("#tabinputThree").val() > 0) && oField.attributes.tabindex.value == 3) {
                var tabinputTwo = $("#tabinputTwo");
                tabinputTwo
                  .putCursorAtEnd() // should be chainable
                  .on("focus", function () { // could be on any event
                      tabinputTwo.putCursorAtEnd()
                  });
            }
            // Return results
            $scope.cursorPosVal = iCaretPos;
        };
        jQuery.fn.putCursorAtEnd = function () {

            return this.each(function () {

                // Cache references
                var $el = $(this),
                    el = this;

                // Only focus if input isn't already
                if (!$el.is(":focus")) {
                    $el.focus();
                }

                // If this function exists... (IE 9+)
                if (el.setSelectionRange) {

                    // Double the length because Opera is inconsistent about whether a carriage return is one character or two.
                    var len = $el.val().length * 2;

                    // Timeout seems to be required for Blink
                    setTimeout(function () {
                        el.setSelectionRange(len, len);
                    }, 1);

                } else {

                    // As a fallback, replace the contents with itself
                    // Doesn't work in Chrome, but Chrome supports setSelectionRange
                    $el.val($el.val());

                }

                // Scroll to the bottom, in case we're in a tall textarea
                // (Necessary for Firefox and Chrome)
                this.scrollTop = 999999;

            });

        };
    }
    thirdCtrl.$inject = ['$scope'];
    return thirdCtrl;
})

