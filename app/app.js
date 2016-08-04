define([
'controllers/homeCtrl',
'controllers/arraySortCtrl',
'controllers/firstCtrl',
'controllers/secondCtrl',
'controllers/thirdCtrl',
'services/dataService',
'directives/phonenumberDirective',
'directives/currencyDirective',
'directives/autotabDirective'
],
    function (homeCtrl, arraySortCtrl, firstCtrl, secondCtrl, thirdCtrl, dataService, phonenumberDirective, currencyDirective, autotabDirective) {
        'use strict';

        var app = angular.module('walletHubApp', ['ui.router', 'ngDialog', 'anim-in-out', 'ng', 'ngAnimate', 'ngAria', 'ngMaterial']);
         
        app.config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/page/0');

            $stateProvider.state("home", {
                url: "/page/{pageno:[0-9]{1,5}}",
                templateUrl: "../index.html",
                views: {
                    'arraySort': {
                        controller: arraySortCtrl,
                        templateUrl: function ($stateParams) {
                            var url;
                            if ($stateParams.pageno === "4") {
                                url = '../app/views/arraySort.html'
                            }
                            return url;
                        }
                    },
                    'pageOne': {
                        controller: firstCtrl,
                        templateUrl: function ($stateParams) {
                            var url;
                            if ($stateParams.pageno === "0") {

                                url = '../app/views/page1.html';
                            }
                            else if ($stateParams.pageno === "1") {
                                url = '../app/views/' + 'page' + $stateParams.pageno + '.html'
                            }
                            return url;
                        }
                    },
                    'pageTwo': {
                        controller: secondCtrl,
                        templateUrl: function ($stateParams) {
                            var url;
                            if ($stateParams.pageno === "0") {
                                url = '../app/views/page2.html'
                            }
                            else if ($stateParams.pageno === "2") {
                                url = '../app/views/' + 'page' + $stateParams.pageno + '.html'
                            }
                            return url;
                        }
                    },
                    'pageThree': {
                        controller: thirdCtrl,
                        templateUrl: function ($stateParams) {
                            var url;
                            if ($stateParams.pageno === "0") {
                                url = '../app/views/page3.html'
                            }
                            else if ($stateParams.pageno === "3") {
                                url = '../app/views/' + 'page' + $stateParams.pageno + '.html'
                            }

                            return url;
                        }
                        
                    }
                }
            })

        });
        app.controller('homeCtrl', homeCtrl);
        app.controller('arraySortCtrl', arraySortCtrl);
        app.controller('firstCtrl', firstCtrl);
        app.controller('secondCtrl', secondCtrl); 
        app.controller('thirdCtrl', thirdCtrl);
        app.factory('dataService', dataService);
        app.directive('phonenumberDirective', phonenumberDirective); 
        app.directive('currencyDirective', currencyDirective); 
        app.directive('autotabDirective', autotabDirective);
    });

