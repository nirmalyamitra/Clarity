"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var buffer_1 = require("buffer");
var fs = require("fs");
var date = new Date();
var common = /** @class */ (function () {
    function common() {
    }
    common.prototype.highlight = function (element) {
        for (var i = 0; i < 10; i++) {
            protractor_1.browser.executeScript("arguments[0].setAttribute('style', arguments[1]);", element, "color: red; border:3px solid red;");
            protractor_1.browser.executeScript("arguments[0].setAttribute('style', arguments[1]);", element, "");
        }
    };
    common.prototype.writeScreenShot = function (filename) {
        protractor_1.browser.takeScreenshot().then(function (png) {
            var stream = fs.createWriteStream(filename);
            stream.write(new buffer_1.Buffer(png, 'base64'));
            stream.end();
        });
    };
    common.prototype.waitforPage = function (pageUrl) {
        var condition = protractor_1.ExpectedConditions.urlContains(pageUrl);
        protractor_1.browser.wait(condition, 60000);
    };
    common.prototype.waitForElement = function (element) {
        var condition = protractor_1.ExpectedConditions.presenceOf(element);
        protractor_1.browser.wait(condition, 60000);
    };
    common.prototype.readCurrentUrl = function () {
        protractor_1.browser.getCurrentUrl().then(function (url) {
            var t = date.toTimeString();
            var time = t.slice(0, 9);
            fs.appendFile('reports/url.txt', time + " ", function (err) {
                if (err)
                    throw err;
            });
            fs.appendFile('reports/url.txt', url + "\n", function (err) {
                if (err)
                    throw err;
            });
        });
    };
    return common;
}());
exports.common = common;
//# sourceMappingURL=common.js.map