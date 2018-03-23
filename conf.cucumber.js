"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
exports.config = {
    specs: ['./features/*.feature'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    onPrepare: function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.driver.fullscreen();
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['json:./reports/json/cucumber_report.json'],
        require: ['./step_definitions/*.js', './hooks/*.js'],
        tags: '@smoke'
    }
};
//# sourceMappingURL=conf.cucumber.js.map