import { Config, browser } from 'protractor';
import fs = require('fs');
import path = require('path');
import winston = require('winston');
import util = require('util');
import { cucumberReportExtn } from './reports/cucumberReportExtn';
const jsonReports = process.cwd() + "/reports/json";



export let config: Config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    browserName: 'chrome',
    /*'chromeOptions': {
      'args': ['incognito', 'disable-extensions', 'start-maximized', 'enable-crash-reporter-for-testing']
    },
    'loggingPrefs': {
      'browser': 'ALL'
    }*/
  },
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    browser.driver.fullscreen();
    cucumberReportExtn.createReportFile(jsonReports);

    fs.truncate('reports/url.txt', 0, function () {
      console.log('done')
    });

    winston.configure({
      transports: [
        new (winston.transports.File)({ filename: 'reports/logger.txt' })
      ]
    });

    fs.truncate('reports/logger.txt', 0, function () {
      console.log('done')
    });
  },
  specs: ['./features/*.feature'],
  seleniumAddress: 'http://localhost:4444/wd/hub',

  suites: [

  ],

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

  onComplete: () => {
    cucumberReportExtn.generateCucumberReport();
  }
};