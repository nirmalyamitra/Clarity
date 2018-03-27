"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var fs = require("fs");
var winston = require("winston");
var cucumberReportExtn_1 = require("./reports/cucumberReportExtn");
var jsonReports = process.cwd() + "/reports/json";
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.driver.fullscreen();
        cucumberReportExtn_1.cucumberReportExtn.createReportFile(jsonReports);
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
    specs: ['./features/*.feature'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['json:./reports/json/cucumber_report.json'],
        require: ['./step_definitions/*.js', './hooks/*.js'],
        tags: '@smoke'
    },
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    onComplete: function () {
        cucumberReportExtn_1.cucumberReportExtn.generateCucumberReport();
    }
};
//# sourceMappingURL=conf.js.map