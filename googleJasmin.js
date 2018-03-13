"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var googleSearchPage_1 = require("./pages/googleSearchPage");
var common_1 = require("./common/common");
describe("Going to Write first test Using Page Object Model", function () {
    it("Should navigate to Google Page and Search for Dam", function () {
        var googleSearch = new googleSearchPage_1.googleSearchPage();
        var global = new common_1.common();
        googleSearch.get();
        global.highlight(googleSearch.searchButton);
        googleSearch.searchBox.sendKeys('Hello World');
        //global.writeScreenShot('google.png');
        googleSearch.searchButton.click();
        //global.waitforPage('Dam');
    });
    protractor_1.browser.sleep(5000);
});
//# sourceMappingURL=googleJasmin.js.map