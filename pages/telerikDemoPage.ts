import { browser, element, by, $$, $ } from 'protractor';
import { idType, basePage } from './basePage';
var winston = require('winston');

const locators = {
    dropDownList: {
        type: idType[idType.linkText],
        value: "DropDownList"
    }
}

export class facebookLoginPage extends basePage {

    dropDownList = this.ElementLocator(locators.dropDownList);

    async get() {
        await browser.get("https://demos.telerik.com/kendo-ui/");
    }


}