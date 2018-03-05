"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var GoogleSearchPage = /** @class */ (function () {
    function GoogleSearchPage() {
        this.searchBox = protractor_1.element(protractor_1.by.name('q'));
        this.searchButton = protractor_1.element(protractor_1.by.name('btnK'));
    }
    return GoogleSearchPage;
}());
exports.GoogleSearchPage = GoogleSearchPage;
//# sourceMappingURL=googleSearchPage.js.map