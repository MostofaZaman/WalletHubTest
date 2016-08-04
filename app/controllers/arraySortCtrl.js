define([], function () {
function arraySortCtrl($scope) {
    $scope.sortType = 'firstname'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchContact = '';     // set the default search/filter term

    // create the list of contacts 
    $scope.contacts = [
      { firstname: 'zaman', lastname: 'Jds', contactno: 223232 },
      { firstname: 'asis', lastname: 'Tusdsnda', contactno: 43223 },
      { firstname: 'josn', lastname: 'dsd', contactno: 7322323 },
      { firstname: 'asds', lastname: 'sdfsd', contactno: 62323232 },
      { firstname: 'zaman', lastname: 'Jds', contactno: 223232 },
      { firstname: 'asis', lastname: 'Tusdsnda', contactno: 43223 },
      { firstname: 'josn', lastname: 'dsd', contactno: 7322323 },
      { firstname: 'asds', lastname: 'sdfsd', contactno: 62323232 },
      { firstname: 'zaman', lastname: 'Jds', contactno: 223232 },
      { firstname: 'asis', lastname: 'Tusdsnda', contactno: 43223 },
      { firstname: 'josn', lastname: 'dsd', contactno: 7322323 },
      { firstname: 'asds', lastname: 'sdfsd', contactno: 62323232 },
      { firstname: 'zaman', lastname: 'Jds', contactno: 223232 },
      { firstname: 'asis', lastname: 'Tusdsnda', contactno: 43223 },
      { firstname: 'josn', lastname: 'dsd', contactno: 7322323 },
      { firstname: 'asds', lastname: 'sdfsd', contactno: 62323232 },
      { firstname: 'zaman', lastname: 'Jds', contactno: 223232 },
      { firstname: 'asis', lastname: 'Tusdsnda', contactno: 43223 },
      { firstname: 'josn', lastname: 'dsd', contactno: 7322323 },
      { firstname: 'asds', lastname: 'sdfsd', contactno: 62323232 },
      { firstname: 'zaman', lastname: 'Jds', contactno: 223232 },
      { firstname: 'asis', lastname: 'Tusdsnda', contactno: 43223 },
      { firstname: 'josn', lastname: 'dsd', contactno: 7322323 },
      { firstname: 'asds', lastname: 'sdfsd', contactno: 62323232 },
      { firstname: 'zaman', lastname: 'Jds', contactno: 223232 },
      { firstname: 'asis', lastname: 'Tusdsnda', contactno: 43223 },
      { firstname: 'josn', lastname: 'dsd', contactno: 7322323 },
      { firstname: 'asds', lastname: 'sdfsd', contactno: 62323232 },
      { firstname: 'zaman', lastname: 'Jds', contactno: 223232 },
      { firstname: 'asis', lastname: 'Tusdsnda', contactno: 43223 },
      { firstname: 'josn', lastname: 'dsd', contactno: 7322323 },
      { firstname: 'asds', lastname: 'sdfsd', contactno: 62323232 },
      { firstname: 'zaman', lastname: 'Jds', contactno: 223232 },
      { firstname: 'asis', lastname: 'Tusdsnda', contactno: 43223 },
      { firstname: 'josn', lastname: 'dsd', contactno: 7322323 },
      { firstname: 'asds', lastname: 'sdfsd', contactno: 62323232 },
      { firstname: 'zaman', lastname: 'Jds', contactno: 223232 },
      { firstname: 'asis', lastname: 'Tusdsnda', contactno: 43223 },
      { firstname: 'josn', lastname: 'dsd', contactno: 7322323 },
      { firstname: 'asds', lastname: 'sdfsd', contactno: 62323232 },
      { firstname: 'zaman', lastname: 'Jds', contactno: 223232 },
      { firstname: 'asis', lastname: 'Tusdsnda', contactno: 43223 },
      { firstname: 'josn', lastname: 'dsd', contactno: 7322323 },
      { firstname: 'asds', lastname: 'sdfsd', contactno: 62323232 },
      { firstname: 'zaman', lastname: 'Jds', contactno: 223232 },
      { firstname: 'asis', lastname: 'Tusdsnda', contactno: 43223 },
      { firstname: 'josn', lastname: 'dsd', contactno: 7322323 },
      { firstname: 'asds', lastname: 'sdfsd', contactno: 62323232 },
      { firstname: 'zaman', lastname: 'Jds', contactno: 223232 },
      { firstname: 'asis', lastname: 'Tusdsnda', contactno: 43223 },
      { firstname: 'josn', lastname: 'dsd', contactno: 7322323 },
      { firstname: 'asds', lastname: 'sdfsd', contactno: 62323232 }
    ];
}
arraySortCtrl.$inject = ['$scope'];
return arraySortCtrl;
})

