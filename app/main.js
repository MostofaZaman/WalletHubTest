requirejs.config({
    paths: {
        'jquery': '../assets/bower_components/jquery-2.1.0.min/index',
        'angular': '../assets/bower_components/angular/angular',
        'angular-animate': '../assets/bower_components/angular-animate/angular-animate',
        'angular-aria': '../assets/bower_components/angular-aria/angular-aria',
        'angular-messages': '../assets/bower_components/angular-messages/angular-messages',
        'ngDialog': '../assets/bower_components/ng-dialog/js/ngDialog',
        'angular-ui-router': '../assets/bower_components/angular-ui-router/release/angular-ui-router',
        'angular-ui-router-anim-in-out': '../assets/bower_components/angular-ui-router-anim-in-out/anim-in-out',
        'angular-material': '../assets/bower_components/angular-material/angular-material',
        'app': '../app/app' // 'app' is the module name. It got defined by define() block, and  can be loaded by either require() or define() block
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-animate':{
            deps: ['angular']
        },
        'angular-aria': {
            deps: ['angular']
        },
        'angular-messages': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-ui-router-anim-in-out': {
            deps: ['angular']
        },
        'angular-material':{
            deps: ['angular', 'angular-animate', 'angular-aria']
        },
        'app': {
            exports: 'app',
            deps: ['angular', 'angular-material']
        }
}
});
require([
'jquery',
'angular',
'angular-animate',
'angular-aria',
'angular-messages',
'ngDialog',
'angular-ui-router',
'angular-ui-router-anim-in-out',
'angular-material',
'app'
],
function () {
    //'use strict';

    angular.bootstrap(document, ['walletHubApp']);
});
