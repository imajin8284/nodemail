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

    router.post('/send',[Contact.send]);
    router.post('contact/send',[exception.exception, Contact.send]);

}
module.exports = ContactApiRouter.router;