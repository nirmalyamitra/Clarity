"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var idType;
(function (idType) {
    idType[idType["id"] = 0] = "id";
    idType[idType["name"] = 1] = "name";
    idType[idType["className"] = 2] = "className";
    idType[idType["linkText"] = 3] = "linkText";
    idType[idType["xpath"] = 4] = "xpath";
    idType[idType["css"] = 5] = "css";
    idType[idType["buttonText"] = 6] = "buttonText";
    idType[idType["options"] = 7] = "options";
})(idType = exports.idType || (exports.idType = {}));
var basePage = /** @class */ (function () {
    function basePage() {
    }
    basePage.prototype.ElementLocator = function (obj) {
        switch (obj.type) {
            case idType[idType.id]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case idType[idType.name]:
                return protractor_1.element(protractor_1.by.name(obj.value));
            case idType[idType.className]:
                return protractor_1.element(protractor_1.by.className(obj.value));
            case idType[idType.linkText]:
                return protractor_1.element(protractor_1.by.linkText(obj.value));
            case idType[idType.xpath]:
                return protractor_1.element(protractor_1.by.xpath(obj.value));
            case idType[idType.css]:
                return protractor_1.element(protractor_1.by.css(obj.value));
            case idType[idType.buttonText]:
                return protractor_1.element(protractor_1.by.buttonText(obj.value));
            case idType[idType.options]:
                return protractor_1.element(protractor_1.by.options(obj.value));
            default:
                break;
        }
    };
    return basePage;
}());
exports.basePage = basePage;
//# sourceMappingURL=basePage.js.map