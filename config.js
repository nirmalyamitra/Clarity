"use strict";
exports.__esModule = true;
exports.config = {
    specs: ['./features/*.feature'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['progress'],
        require: ['./step_definitions/*.js', './hooks/*.js'],
        tags: '@smoke'
    }
};
//# sourceMappingURL=config.js.map