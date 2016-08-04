define([], function () {
    function secondCtrl($scope, dataService) {
        $scope.MyData = dataService;
        var tmpTotal = 0;
        var changedFiled;
        var changedValue;
        $scope.$watch('amount', function (newValue, oldValue) {
            var flag = true;
            if (!angular.isUndefined(newValue)) {
                var inputOne = parseInt(angular.isUndefined(newValue.One) ? parseInt(0) : parseInt(newValue.One));
                var inputTwo = parseInt(angular.isUndefined(newValue.Two) ? parseInt(0) : parseInt(newValue.Two));
                var inputThree = parseInt(angular.isUndefined(newValue.Three) ? parseInt(0) : parseInt(newValue.Three));
                //tmpTotal = parseInt(angular.isUndefined(newValue.One) ? parseInt(0) : parseInt(newValue.One)) + parseInt(angular.isUndefined(newValue.Two) ? parseInt(0) : parseInt(newValue.Two)) + parseInt(angular.isUndefined(newValue.Three) ? parseInt(0) : parseInt(newValue.Three));
                tmpTotal = parseInt($("#one").val() == "" ? parseInt(0) : $("#one").val()) + parseInt($("#two").val() == "" ? parseInt(0) : $("#two").val()) + parseInt($("#three").val() == "" ? parseInt(0) : $("#three").val());
                $scope.Sum = tmpTotal;
                $("#total").val(tmpTotal);
                if (!angular.isUndefined(oldValue)) {
                    var oldValOne = parseInt(angular.isUndefined(oldValue.One) ? parseInt(0) : parseInt(oldValue.One));
                    var oldValTwo = parseInt(angular.isUndefined(oldValue.Two) ? parseInt(0) : parseInt(oldValue.Two));
                    var oldValThree = parseInt(angular.isUndefined(oldValue.Three) ? parseInt(0) : parseInt(oldValue.Three));
                }
                if (!angular.equals(inputOne, oldValOne)) {
                    changedFiled = "inputOne"; 
                    changedValue = inputOne;
                }
                if (!angular.equals(inputTwo, oldValTwo)) {
                    changedFiled = "inputTwo"; 
                    changedValue = inputTwo;
                }
                if (!angular.equals(inputThree, oldValThree)) {
                    changedFiled = "inputThree"; 
                    changedValue = inputThree;
                }
            }
        }, true);


        $scope.sumChnage = function (newamount) {
            $scope.amount = {};
            var updateByvalue;
            if (newamount > changedValue) {
                updateByvalue = (parseInt(newamount) - parseInt(changedValue)) / 2;
                if (changedFiled != "inputOne") {
                    $("#one").val(updateByvalue);
                    $scope.amount.One = updateByvalue;
                }
                else {
                    $("#one").val(changedValue);
                    $scope.amount.One = parseInt(changedValue);
                }
                if (changedFiled != "inputTwo") {
                    $("#two").val(updateByvalue);
                    $scope.amount.Two = updateByvalue;
                }
                else {
                    $("#two").val(changedValue);
                    $scope.amount.Two = parseInt(changedValue);
                }
                if (changedFiled != "inputThree") {
                    $("#three").val(updateByvalue);
                    $scope.amount.Three = updateByvalue;
                }
                else {
                    $("#three").val(changedValue);
                    $scope.amount.Three = parseInt(changedValue);
                }
            }
            else {
                updateByvalue = parseInt(newamount) / 3;
                $("#one").val(updateByvalue);
                $("#two").val(updateByvalue);
                $("#three").val(updateByvalue);
                $scope.amount.One = updateByvalue;
                $scope.amount.Two = updateByvalue;
                $scope.amount.Three = updateByvalue;
            }
            
            
        }
    }
    secondCtrl.$inject = ['$scope', 'dataService'];
    return secondCtrl;
})

