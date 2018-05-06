import fs = require('fs');
import { mkdirp } from 'mkdirp';
import * as report from 'cucumber-html-reporter';
import * as path from 'path';

var winston = require('winston');
var report = require('cucumber-html-reporter');

const cucumber = require('cucumber');
const jsonDir = path.join(process.cwd() + "/reports/json");
const htmlDir = path.join(process.cwd() + "/reports/html");

winston.info('jsonDir '+jsonDir);
winston.info('htmlDir '+htmlDir);

const jsonFile = jsonDir + "/cucumber_report.json";

const cucumberReportOption = {
    theme: 'bootstrap',
    jsonFile: jsonFile,
    output: htmlDir + "/cucumber_report.html",
    reportSuiteAsScenarios: true,
    launchReport: true,
    brandTitle: 'Sanity Report',
    metadata: {
        "App Version": "0.1.1",
        "Test Environment": "TESTING",
        "Browser": "Chrome",
        "Platform": "OSX",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

export class cucumberReportExtn {

    public static createReportFile(dir: string) {

        if (!fs.existsSync(dir))
            mkdirp.sync(dir);
    }

    public static generateCucumberReport() {
        report.generate(cucumberReportOption);
    }
}