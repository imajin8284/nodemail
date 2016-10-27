/**!
 Copyright (c) 2016 Naoma Matsumoto.
 */

/// <reference path="../../typings/index.d.ts" />



'use strict';

export module RewritingPageRouter {

    const express = require('express');
    export var router = express.Router();
    const share = require('../common/share');
    const file_utility = share.Utility;

  //  const ExceptionController: any = require("../common/controllers/exception_controller");
  //  const exception: any = new ExceptionController.Exception();

    router.get("/",[ (request:any, response:any):void => {

        let contact:any = file_utility.readfile("./public/contact.html", (error, contact) => {
            if(!error){
                let confirmation:any = file_utility.readfile("./public/contact_confirmation.html", (error, confirmation) => {
                    if(!error){
                        response.render("index", {contact: contact,confirmation:confirmation});
                    }
                });
            }
        });
    }]);

}

module.exports = RewritingPageRouter.router;