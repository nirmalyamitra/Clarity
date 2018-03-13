"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var fs = require("fs");
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
    },
    specs: ['./googleJasmin.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true
};
//# sourceMappingURL=conf.js.map