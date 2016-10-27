/**!
 Copyright (c) 2016 7thCode.(http://seventh-code.com/)
 This software is released under the MIT License.
 //opensource.org/licenses/mit-license.php
 */

/// <reference path="../../../typings/index.d.ts" />

"use strict";

export module FileUtility {
    const share = require('./share');
    const fs:any = require('graceful-fs');
    const config = share.config;
    const Wrapper = share.Wrapper;
    
    export class Utility {
        private current:string = '';

        constructor(current:string) {
            this.current = current;
        }

        /*    public readdir(request:any, response:any, callback:(response:any, data:any) => void):void {
         let idx = 0;

         let _this = this;

         fs.readdir(_this.folder, function (error, files) {
         if (error) throw error;
         var fileList = [];
         files.filter(function (file) {
         idx = file.indexOf(_this.extension);
         if (idx != -1) {
         return file; //絞り込み
         }
         }).forEach(function (file) {
         fileList.push(file);
         });
         callback(response, fileList);
         });
         } */

        public readdir(path:string, callback:(error, data:any) => void):void {
            fs.readdir(this.current + "/" + path, function (error, files):void {
                if (!error) {
                    callback(null, files);
                } else {
                    callback(error, null);
                }
            });
        }

        public readfileSync(filename:any):string {
            let result = "";
            let file = fs.openSync(filename, 'r');
            if (file) {
                try {
                    result = fs.readFileSync(filename, 'utf8');
                } finally {
                    fs.closeSync(file);
                }
            }
            return result;
        }

        public readfile(filename:any, callback:(error, data) => void):void {
            fs.open(filename, 'r', (error, fd) => {
                let data = null;
                if (fd) {

                    data = fs.readFileSync(filename, 'utf8');

                    try {
                        data = fs.readFileSync(filename, 'utf8');
                    } finally {
                        fs.closeSync(fd);
                    }


                    // fs.readFileSync(filename, 'utf8', (error, data) => {
                    //     fs.close((error) => {
                    //         callback(error, data);
                    //     });
                    // });
                }
                callback(error, data);

            });
        }

    }
}

module.exports = FileUtility;
