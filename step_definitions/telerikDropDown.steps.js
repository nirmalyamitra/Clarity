"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var cucumber_1 = require("cucumber");
var protractor_1 = require("protractor");
var telerikDemoPage_1 = require("../pages/telerikDemoPage");
var telerikDropDownPage_1 = require("../pages/telerikDropDownPage");
var common_1 = require("../common/common");
var winston = require('winston');
var global = new common_1.common();
var telerikDemo = new telerikDemoPage_1.telerikHome();
var telerikDropDownDemo = new telerikDropDownPage_1.telerikDropDown();
cucumber_1.Given(/^I navigate to Telerik Page to click on Drop Down List$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, telerikDemo.get()];
            case 1:
                _a.sent();
                return [4 /*yield*/, global.readCurrentUrl()];
            case 2:
                _a.sent();
                return [4 /*yield*/, global.writeScreenShot('reports/snaps/telrikDemo.png')];
            case 3:
                _a.sent();
                winston.info('I navigate to Telerik Page to click on Drop Down List');
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I click on "Drop Down List" link$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, telerikDemo.dropDownList.click()];
            case 1:
                _a.sent();
                return [4 /*yield*/, global.readCurrentUrl()];
            case 2:
                _a.sent();
                return [4 /*yield*/, global.writeScreenShot('reports/snaps/telrikDropDown.png')];
            case 3:
                _a.sent();
                winston.info('I click on "Drop Down List"');
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I navigate to Drop Down List Page$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, global.waitforPage('dropdownlist')];
            case 1:
                _a.sent();
                winston.info('I navigate to "Drop Down List" Page');
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I select a color from  "Color" drop down$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
cucumber_1.Then(/^I select a size from "Size" drop down$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            //await global.clickElementByClassname(telerikDropDownDemo.sizeDropDown,1);
            return [4 /*yield*/, protractor_1.element.all(protractor_1.by.className(telerikDropDownDemo.sizeDropDown)).then(function (items) {
                    items[1].click();
                })];
            case 1:
                //await global.clickElementByClassname(telerikDropDownDemo.sizeDropDown,1);
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I click on "Customize" button$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=telerikDropDown.steps.js.map