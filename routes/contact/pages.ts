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
        
      let b = 1;

        let file:any = file_utility.readfile("./public/contact.html", (error, file) => {
            let html = file;
                let file2:any = file_utility.readfile("./public/contact_confirmation.html", (error, file2) => {
                    let html2 = file2;
                response.render("index", {html: html,html2:html2});
            });
        });
    }]);
    
 //   router.get("/",[exception.page_guard, (request:any, response:any):void => {
 //       response.render("systems/contact/index", {user: request.user, message: "Back", status: 200});
 //   }]);
}

module.exports = RewritingPageRouter.router;