"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var googleSearchPage_1 = require("./pages/googleSearchPage");
describe("Going to Write first test Using Page Object Model", function () {
    it("Should navigate to Google Page and Search for Dam", function () {
        var googleSearch = new googleSearchPage_1.googleSearchPage();
        googleSearch.get();
        googleSearch.searchBox.sendKeys('Dam');
        googleSearch.searchButton.click();
    });
    protractor_1.browser.sleep(5000);
});
//# sourceMappingURL=googleJasmin.js.map