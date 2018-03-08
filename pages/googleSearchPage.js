"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var protractor_1 = require("protractor");
var basePage_1 = require("./basePage");
var locators = {
    searchBox: {
        type: basePage_1.idType[basePage_1.idType.name],
        value: "q"
    },
    searchButton: {
        type: basePage_1.idType[basePage_1.idType.name],
        value: "btnK"
    }
};
var googleSearchPage = /** @class */ (function (_super) {
    __extends(googleSearchPage, _super);
    function googleSearchPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.searchBox = _this.ElementLocator(locators.searchBox);
        _this.searchButton = _this.ElementLocator(locators.searchButton);
        return _this;
    }
    // searchBox = element(by.name('q'));
    // searchButton = element(by.name('btnK'));
    googleSearchPage.prototype.get = function () {
        protractor_1.browser.get("http://www.google.com");
    };
    return googleSearchPage;
}(basePage_1.basePage));
exports.googleSearchPage = googleSearchPage;
//# sourceMappingURL=googleSearchPage.js.map