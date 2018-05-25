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
        fs.truncate('reports/logger.txt', 0, function () {
            console.log('done');
        });
    },
    specs: ['./features/*.feature'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: [],
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