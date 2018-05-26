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
var basePage_1 = require("./basePage");
var winston = require('winston');
var locators = {
    colorDropDown: {
        type: basePage_1.idType[basePage_1.idType.className],
        value: "k-dropdown-wrap k-state-default"
    },
    sizeDropDown: {
        type: basePage_1.idType[basePage_1.idType.options]
    }
};
var facebookLoginPage = /** @class */ (function (_super) {
    __extends(facebookLoginPage, _super);
    function facebookLoginPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colorDropDown = _this.ElementLocator(locators.colorDropDown);
        return _this;
    }
    return facebookLoginPage;
}(basePage_1.basePage));
exports.facebookLoginPage = facebookLoginPage;
//# sourceMappingURL=telerikDropDownPage.js.map