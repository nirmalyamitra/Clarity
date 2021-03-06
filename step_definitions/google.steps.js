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
var googleSearchPage_1 = require("../pages/googleSearchPage");
var common_1 = require("../common/common");
var scenarioHook_1 = require("../hooks/scenarioHook");
var winston = require('winston');
var googleSearch = new googleSearchPage_1.googleSearchPage();
var global = new common_1.common();
cucumber_1.Given(/^I navigate to Google Page to search for Value1$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                googleSearch.get();
                return [4 /*yield*/, global.highlight(googleSearch.searchButton)];
            case 1:
                _a.sent();
                return [4 /*yield*/, global.readCurrentUrl()];
            case 2:
                _a.sent();
                winston.info('I navigate to Google Page to search for ' + scenarioHook_1.dataFile.Value.searchValue1);
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I search for Value1$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //await googleSearch.searchBox.sendKeys('Feluda');
                winston.info('Search Value1 Value : ', scenarioHook_1.dataFile.Value.searchValue1);
                return [4 /*yield*/, googleSearch.searchBox.sendKeys(scenarioHook_1.dataFile.Value.searchValue1)];
            case 1:
                _a.sent();
                winston.info('I search for ' + scenarioHook_1.dataFile.Value.searchValue1);
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I click on the 'Search Now' button$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, googleSearch.searchButton.click()];
            case 1:
                _a.sent();
                winston.info('I click on the Search Now button');
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I should see the listings of Value1$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, global.waitforPage(scenarioHook_1.dataFile.Value.searchValue1)];
            case 1:
                _a.sent();
                return [4 /*yield*/, global.readCurrentUrl()];
            case 2:
                _a.sent();
                return [4 /*yield*/, global.writeScreenShot('reports/snaps/google.png')];
            case 3:
                _a.sent();
                winston.info('I should see the listings of ' + scenarioHook_1.dataFile.Value.searchValue1);
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Given(/^I navigate to Google Page to search for Value2$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, googleSearch.get()];
            case 1:
                _a.sent();
                return [4 /*yield*/, global.highlight(googleSearch.searchButton)];
            case 2:
                _a.sent();
                return [4 /*yield*/, global.readCurrentUrl()];
            case 3:
                _a.sent();
                winston.info('I navigate to Google Page to search for ' + scenarioHook_1.dataFile.Value.searchValue2);
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I search for Value2$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                //await googleSearch.searchBox.sendKeys('Dam');
                winston.info('Search Value2 Value : ', scenarioHook_1.dataFile.Value.searchValue2);
                return [4 /*yield*/, googleSearch.searchBox.sendKeys(scenarioHook_1.dataFile.Value.searchValue2)];
            case 1:
                _a.sent();
                winston.info('I search for ' + scenarioHook_1.dataFile.Value.searchValue2);
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I click on the 'Search Now' button to search for Value2$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, googleSearch.searchButton.click()];
            case 1:
                _a.sent();
                winston.info('I click on the Search Now button to search for ' + scenarioHook_1.dataFile.Value.searchValue2);
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then(/^I should see the listings of Value2$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, global.waitforPage(scenarioHook_1.dataFile.Value.searchValue2)];
            case 1:
                _a.sent();
                return [4 /*yield*/, global.readCurrentUrl()];
            case 2:
                _a.sent();
                return [4 /*yield*/, global.writeScreenShot('reports/snaps/googleDam.png')];
            case 3:
                _a.sent();
                winston.info('I should see the listings of ' + scenarioHook_1.dataFile.Value.searchValue2);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=google.steps.js.map