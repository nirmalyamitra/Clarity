"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe("Goint to Write first test", function () {
    it("should pass without any issues", function () {
        protractor_1.browser.get("https://www.google.co.in");
        protractor_1.element(protractor_1.by.name('q')).sendKeys('Dam');
        protractor_1.element(protractor_1.by.name('btnK')).click();
    });
    protractor_1.browser.sleep(5000);
});
//# sourceMappingURL=googleJasmin.js.map