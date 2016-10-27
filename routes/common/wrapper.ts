/**!
 Copyright (c) 2016 7thCode.(http://seventh-code.com/)
 This software is released under the MIT License.
 //opensource.org/licenses/mit-license.php
 */

/// <reference path="../../../typings/index.d.ts" />
/// <reference path="./cipher.ts" />
/// <reference path="./result.ts" />

"use strict";

export module Promised {

    const fs = require('graceful-fs');

    const _ = require("lodash");

    const result: any = require("./result");

    const config = JSON.parse(fs.readFileSync("./config/systems/config.json", 'utf-8'));

    const log4js = require('log4js');
    log4js.configure("./config/systems/logs.json");
    const logger = log4js.getLogger('request');
    logger.setLevel(config.loglevel);

    export class Wrapper {

        constructor(){

        }
        public BasicHeader(response: any, session: any): any {
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Pragma", "no-cache");
            response.header("Cache-Control", "no-cache");
            response.contentType("application/json");
            return response;
        }

        public Exception(req: any, res: any, callback: (req: any, res: any) => void): void {
            try {
                callback(req, res);
            } catch (e) {
                this.SendFatal(res, 100000, e.message, e);
            }
        }

        public Guard(req: any, res: any, callback: (req: any, res: any) => void): void {
            if (req.headers["x-requested-with"] === "XMLHttpRequest") {
                res = this.BasicHeader(res, "");
                callback(req, res);
            } else {
                this.SendError(res, 10, "", {});
            }
        }

        public SendWarn(response: any, code: number, message: any, object: any): void {
            logger.warn(message + " " + code);
            if (response) {
                response.json(new result(code, message, object));
            }
        }

        public SendError(response: any, code: number, message: any, object: any): void {
            logger.error(message + " " + code);
            if (response) {
                response.json(new result(code, message, object));
            }
        }

        public SendForbidden(response: any): void {
            logger.error("Forbidden");
            if (response) {
                response.status(403).render("error", {message: "Forbidden...", status: 403});
            }
        }

        public SendNotFound(response: any): void {
            logger.error("notfound");
            if (response) {
                response.status(404).render("error", {message: "not found", status: 404});
            }
        }

        public SendFatal(response: any, code: number, message: any, object: any): void {
            logger.fatal(message + " " + code);
            if (response) {
                response.status(500).render("error", {message: message, status: 500});
            }
        }

        public SendSuccess(response: any, object: any): void {
            if (response) {
                response.json(new result(0, "", object));
            }
        }

        public SendSuccessList(response: any, code: number, object: any): void {
            if (response) {
                response.json(new result(code, "", object));
            }
        }
    }
}

module.exports = Promised;
