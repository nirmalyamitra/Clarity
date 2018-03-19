import { Config, browser } from 'protractor';
import fs = require('fs');
import path = require('path');
import winston = require('winston');
import util = require('util');

export let config: Config = {
  framework: 'jasmine',
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

    fs.truncate('reports/url.txt', 0, function () {
      console.log('done')
    });

    winston.configure({
      transports: [
        new (winston.transports.File)({ filename: 'reports/logger.txt' })
      ]
    });

  },
  specs: ['./googleJasmin.js'],
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};