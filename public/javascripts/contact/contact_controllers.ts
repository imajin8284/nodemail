/**!
 Copyright (c) 2016 Naoma Matsumoto.
 */

/// <reference path="../../../typings/index.d.ts" />

"use strict";

let ContactControllers: angular.IModule = angular.module('ContactControllers', []);

ContactControllers.factory('FileHtmlQuery', ['$resource',
    ($resource): angular.resource.IResource<any> => {
        return $resource('/contact/jsonQuery', {}, {
            query: {method: 'GET'}
        });
    }]);
ContactControllers.factory('contactSend', ['$resource',
    ($resource): angular.resource.IResource<any> => {
        return $resource('/contact/send', {}, {
            send: {method: 'POST'}
        });
    }]);


ContactControllers.controller('ContactController', ['$scope','contactSend',
    ($scope: any,contactSend:any): void => {

        let a = 1;
        $scope.selects = [2010,2011,2012,2013,2014];
        $scope.year = null;

        $scope.click = () => {



            let item = new contactSend();
            item.text = $scope.text;
            item.text = $scope.textarea;
            item.check1 = $scope.check1;
            item.check2 = $scope.check2;
//            let b = $scope.select;
            // item.$send((data): void => {
            //     if (data == 0) {
            //         let a = 1;
            //     }
            // });




        };




    }]);

