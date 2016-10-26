/**!
 Copyright (c) 2016 Naoma Matsumoto.
 */

/// <reference path="../../../typings/index.d.ts" />






'use strict';

export module RewritingPageRouter {

    const express = require('express');
    export var router = express.Router();

    const ExceptionController: any = require("../common/controllers/exception_controller");
    const exception: any = new ExceptionController.Exception();

    router.get("/",[exception.page_guard, (request:any, response:any):void => {
        response.render("systems/contact/index", {user: request.user, message: "Back", status: 200});
    }]);
}

module.exports = RewritingPageRouter.router;