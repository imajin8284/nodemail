/**!
 Copyright (c) 2016 7thCode.
 This software is released under the MIT License.
 //opensource.org/licenses/mit-license.php
 */

/// <reference path="../../../../typings/index.d.ts" />

"use strict";
const nodemailer = require('nodemailer');
const share = require('../../common/share');
const logger = share.logger;
const pug = require('pug');
const path = require('path');

const Wrapper = share.Wrapper;
const fs:any = require('graceful-fs');
const config = JSON.parse(fs.readFileSync('config/systems/config.json', 'utf-8'));

export module ContactModule {

    export class Contact {

        public send(request:any, response:any) {

            var transporter = nodemailer.createTransport(config.mailsetting);

            let template = pug.renderFile(path.join(__dirname, '../../../views/mails/contact.pug'), {
                textbox: request.body.text,
                email: request.body.email,
                textarea: request.body.textarea,
                check1: request.body.check1,
                check2: request.body.check2,
                group: request.body.group,
                select: request.body.select
            });
            let template2 = pug.renderFile(path.join(__dirname, '../../../views/mails/contactBroad.pug'), {
                textbox: request.body.text,
                email: request.body.email,
                textarea: request.body.textarea,
                check1: request.body.check1,
                check2: request.body.check2,
                group: request.body.group,
                select: request.body.select
            });


            var mailOptions = {

                from: config.fromContent +"<"+config.mailsetting+">",
                to: request.body.email,
                subject: config.subjectCustomer,
                html: template
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (!error) {
                    mailOptions = {
                        from: config.fromContent +"<"+config.mailsetting+">",
                        to: config.mailAddress,
                        subject: config.subjectBroad,
                        html: template2
                    };

                    transporter.sendMail(mailOptions, function (error, info) {
                        if (!error) {
                            Wrapper.SendSuccess(response, 0, "sendmail ok", {});
                        } else {
                            Wrapper.SendError(response, 1, error.message, error);
                        }
                    });
                }else{
                    let template2 = pug.renderFile(path.join(__dirname, '../../../views/mails/contactBroad.pug'), {
                        textbox: request.body.text,
                        email: request.body.email,
                        textarea: request.body.textarea,
                        check1: request.body.check1,
                        check2: request.body.check2,
                        group: request.body.group,
                        select: request.body.select
                    });

                    mailOptions = {
                        from: config.fromContent +"<"+config.mailsetting+">",
                        to: config.mailAddress,
                        subject: config.subjectBroad,
                        html: template2
                    };

                    transporter.sendMail(mailOptions, function (error, info) {
                        if (!error) {
                            Wrapper.SendSuccess(response, 0, "sendmail ok", {});
                        } else {
                            Wrapper.SendError(response, 1, error.message, error);
                        }
                    });


                }
            });

        }
    }
}
module.exports = ContactModule;
