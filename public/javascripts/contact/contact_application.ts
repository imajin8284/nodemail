/**!
 Copyright (c) 2016 Naoma Matsumoto.
 */

/// <reference path="../../../typings/index.d.ts" />

"use strict";

let ContactApplication:any = angular.module('ContactApplication', ['ngMessages',"ngResource", 'ContactControllers']);

ContactApplication.run(['$rootScope',
    function ($rootScope) {
        $rootScope.$on("$routeChangeSuccess", (event:any, current:any, previous:any, rejection:any):void => {
        
        });
    }
]);


// ContactApplication.config(['$compileProvider', '$httpProvider',
//     ($compileProvider:any, $httpProvider:any):void => {
//         $compileProvider.debugInfoEnabled(false);
//         $httpProvider.defaults.headers.common = {'x-requested-with': 'XMLHttpRequest'};
//         $httpProvider.defaults.headers.common['If-Modified-Since'] = 'Thu, 01 Jun 1970 00:00:00 GMT'; //マイクロソフトのバグ対応！！！
//     }]);
