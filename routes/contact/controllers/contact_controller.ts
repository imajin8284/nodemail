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
const Wrapper = share.Wrapper;
const fs:any = require('graceful-fs');
const config = JSON.parse(fs.readFileSync('config/systems/config.json', 'utf-8'));

export module ContactModule {

    export class Contact {

        public send(request:any, response:any) {

            var transporter = nodemailer.createTransport(config.mailsetting);

            var mailOptions = {
                from: '"賃貸経営ネット" <n.matsumoto@broad-e.co.jp>', // sender address
                to: 'imajin8284@yahoo.co.jp', // list of receivers
                subject: config.subject, // Subject line
                text: 'Hello world ?', // plaintext body
                html: config.contentHtml // html body
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (!error) {
                    Wrapper.SendSuccess(response, 0, "sendmail ok", {});
                } else {
                    Wrapper.SendError(response, 1, error.message, error);
                }
            });

        }
    }
}
module.exports = ContactModule;
