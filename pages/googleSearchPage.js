"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var googleSearchPage = /** @class */ (function () {
    function googleSearchPage() {
        this.searchBox = protractor_1.element(protractor_1.by.name('q'));
        this.searchButton = protractor_1.element(protractor_1.by.name('btnK'));
    }
    googleSearchPage.prototype.get = function () {
        protractor_1.browser.get("http://www.google.com");
    };
    return googleSearchPage;
}());
exports.googleSearchPage = googleSearchPage;
//# sourceMappingURL=googleSearchPage.js.map