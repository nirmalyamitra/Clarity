import { Config, browser } from 'protractor';
import { truncate } from 'fs';

export let config: Config = {
    specs: ['./features/*.feature'],
    seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    onPrepare: () => {
        browser.waitForAngularEnabled(false);
        browser.driver.fullscreen();
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['json:./reports/json/cucumber_report.json'],
        require: ['./step_definitions/*.js', './hooks/*.js'],
        tags: '@smoke'
    }
    
}