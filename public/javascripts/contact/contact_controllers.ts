/**!
 Copyright (c) 2016 Naoma Matsumoto.
 */

/// <reference path="../../../typings/index.d.ts" />

"use strict";

let ContactControllers: angular.IModule = angular.module('ContactControllers', []);

ContactControllers.factory('mailSend', ['$resource',
    ($resource): angular.resource.IResource<any> => {
        return $resource('/contact/send', {}, {
            send: {method: 'POST'}
        });
    }]);

ContactControllers.controller('ContactController', ['$scope','mailSend',
    ($scope: any,mailSend:any): void => {
        $scope.gamen = true;

        //SelectBoxの初期値
        $scope.selects = [2010,2011,2012,2013,2014];
        $scope.select = null;


        $scope.click = () => {
            $scope.gamen = false;
        };

        $scope.Registration = () =>{
            let item = new mailSend();

            item.text = $scope.text;
            item.textarea = $scope.textarea;

            item.email = $scope.email;
            item.radio = $scope.radio;

            item.check1 = $scope.check1;
            item.check2 = $scope.check2;

            item.group = $scope.group;

            item.select = $scope.select;

            item.$send((data: any): void => {

                if(data.code === 0){
                    window.location.href = "http://localhost:3000/contact_completion.html"
                }

            });
        }
        $scope.Back = () =>{
            $scope.gamen = true;
        }

    }]);

ContactControllers.controller('ContactConfirmationController', ['$scope','mailTransition','$location',
    ($scope: any,mailTransition:any,$location:any): void => {







    }]);
