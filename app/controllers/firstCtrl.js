define([], function () {
    function firstCtrl($scope, dataService) {
        $scope.MyData = dataService;
        $scope.myModel = {};
        $scope.myPrompt = "Input your phonenumber";
        $scope.hintsText = "Input your price";
        $scope.price = 2;
    }
    firstCtrl.$inject = ['$scope', 'dataService'];
    return firstCtrl;
})

