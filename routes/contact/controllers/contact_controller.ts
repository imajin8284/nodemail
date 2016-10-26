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
const file_utility = share.Utility;
const fs:any = require('graceful-fs');
const config = JSON.parse(fs.readFileSync('config/systems/config.json', 'utf-8'));



export module ContactModule {

    // const share = require('../../common/share');
    // const Wrapper = share.Wrapper;
    //const _ = require('lodash');

    export class Contact {


        public send(request:any, response:any) {
            var smtpUser:any = nodemailer.createTransport('SMTP', config.mailsetting); //SMTPの接続
            //  let smtpUser:any = mailer.createTransport(smtpTransport(config.mailsetting)); //  nodemailer ver 1.10

            if (smtpUser) {

                //メールの内容(user)
                var resultMail:any = {
                    from: "n.matsumoto@broad-e.co.jp",
                    to: "imajin8280@gmail.com",
                    subject: '【件名】TESTお問い合わせ',
                    html: "<br/>" +
                    "お問い合わせ内容：" +
                    "<br/>" +
                    " "
                };
                smtpUser.sendMail(resultMail, (error:any, res:any):void => {
                    if (!error) { //送信に失敗したとき
                        Wrapper.SendSuccess(response, 0, "sendmail ok", {});
                    } else { //送信に成功したとき
                        Wrapper.SendError(response, 1, error.message, error);
                    }
                    smtpUser.close();   //SMTPの切断
                });
            }

        }
    }
}
module.exports = ContactModule;
