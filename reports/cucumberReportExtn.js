"use strict";
exports.__esModule = true;
var fs = require("fs");
var mkdirp_1 = require("mkdirp");
var path = require("path");
var winston = require('winston');
var report = require('cucumber-html-reporter');
var cucumber = require('cucumber');
var jsonDir = path.join(process.cwd() + "/reports/json");
var htmlDir = path.join(process.cwd() + "/reports/html");
winston.info('jsonDir ' + jsonDir);
winston.info('htmlDir ' + htmlDir);
var jsonFile = jsonDir + "/cucumber_report.json";
var cucumberReportOption = {
    theme: 'bootstrap',
    jsonFile: jsonFile,
    output: htmlDir + "/cucumber_report.html",
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "0.1.1",
        "Test Environment": "TESTING",
        "Browser": "Chrome",
        "Platform": "OSX",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};
var cucumberReportExtn = /** @class */ (function () {
    function cucumberReportExtn() {
    }
    cucumberReportExtn.createReportFile = function (dir) {
        if (!fs.existsSync(dir))
            mkdirp_1.mkdirp.sync(dir);
    };
    cucumberReportExtn.generateCucumberReport = function () {
        report.generate(cucumberReportOption);
    };
    return cucumberReportExtn;
}());
exports.cucumberReportExtn = cucumberReportExtn;
//# sourceMappingURL=cucumberReportExtn.js.map