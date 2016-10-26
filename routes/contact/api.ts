/**!
 Copyright (c) 2016 Naoma Matsumoto.
 */

/// <reference path="../../../typings/index.d.ts" />

'use strict';

export module ContactApiRouter {

    const express = require('express');
    export let router = express.Router();

    const ContactModule:any = require("./controllers/contact_controller");
    const Contact:any = new ContactModule.Contact();

    const ExceptionController: any = require("../common/controllers/exception_controller");
    const exception: any = new ExceptionController.Exception();

    router.get('/send',[exception.exception, Contact.send]);
    router.get('/contact/send',[Contact.send]);

}
module.exports = ContactApiRouter.router;