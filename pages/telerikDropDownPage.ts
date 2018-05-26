import { browser, element, by, $$, $ } from 'protractor';
import { idType, basePage } from './basePage';
var winston = require('winston');

const locators = {
    colorDropDown: {
        type: idType[idType.className],
        value: "k-dropdown-wrap k-state-default"
    },
    sizeDropDown: {
        type: idType[idType.options]
    }
}

export class facebookLoginPage extends basePage {

    colorDropDown = this.ElementLocator(locators.colorDropDown);


}