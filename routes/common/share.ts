/**!
 Copyright (c) 2016 7thCode.(http://seventh-code.com/)
 This software is released under the MIT License.
 //opensource.org/licenses/mit-license.php
 */

/// <reference path="../../../typings/index.d.ts" />

"use strict";

export module ShareModule {

    const fs = require('graceful-fs');
    export const config = JSON.parse(fs.readFileSync('./config/systems/config.json', 'utf-8'));

    const _ = require("lodash");

    const log4js = require('log4js');
    log4js.configure("./config/systems/logs.json");

    export const logger = log4js.getLogger('request');
    logger.setLevel(config.loglevel);

    const Promised: any = require("./wrapper");
    export const Wrapper = new Promised.Wrapper();

    const path:any = require('path');
    export const AbsolutePath = (relpath) => {
        return path.join(__dirname, relpath);
    };


    export class Share {

    }
}

module.exports = ShareModule;
