import { browser, element, by, $$, $ } from 'protractor';
import { idType, basePage } from './basePage';
import { common } from '../common/common';
var winston = require('winston');
let global = new common();

const locators = {
    colorDropDown: {
        type: idType[idType.className],
        value: "k-dropdown-wrap k-state-default"
    },
    sizeDropDown: {
        type: idType[idType.className],
        value: "k-dropdown-wrap k-state-default"
    }
}

export class telerikDropDown extends basePage {

    colorDropDown = this.ElementLocator(locators.colorDropDown);
    sizeDropDown = this.ElementLocator(locators.colorDropDown);
}