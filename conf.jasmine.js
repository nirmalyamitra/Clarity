"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var fs = require("fs");
var winston = require("winston");
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.driver.fullscreen();
        fs.truncate('reports/url.txt', 0, function () {
            console.log('done');
        });
        winston.configure({
            transports: [
                new (winston.transports.File)({ filename: 'reports/logger.txt' })
            ]
        });
        /*afterEach(() => {
          var logs = browser.driver.manage().logs(),
            logType = 'browser'; // browser
        logs.getAvailableLogTypes().then(function (logTypes) {
            if (logTypes.indexOf(logType) > -1) {
                var logFileName = 'reports/console.txt';
                browser.driver.manage().logs().get(logType).then(function (logsEntries) {
                    // Write the browser logs to file
                    console.log('Writing file ' + logFileName);
                    var len = logsEntries.length;
                    for (var i = 0; i < len; ++i) {
    
                        var logEntry = logsEntries[i];
    
                        var msg =  logEntry.type + ' ' + logEntry.message;
                        fs.appendFile('reports/console.txt', msg + '\r\n', function (err) {
                          if (err) throw err;
                        });
                    }
                });
            }
        });
      });*/
    },
    specs: ['./googleJasmin.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
};
//# sourceMappingURL=conf.jasmine.js.map