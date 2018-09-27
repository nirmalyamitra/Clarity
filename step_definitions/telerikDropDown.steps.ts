import {Given, When, Then} from 'cucumber'
import { browser, element, by } from 'protractor';
import { telerikHome } from '../pages/telerikDemoPage';
import { telerikDropDown } from '../pages/telerikDropDownPage'
import { common } from '../common/common';
import { async } from 'q';
import { dataFile } from '../hooks/scenarioHook';
var winston = require('winston');

    let global = new common();
    let telerikDemo = new telerikHome();
    let telerikDropDownDemo = new telerikDropDown();
    
    Given(/^I navigate to Telerik Page to click on Drop Down List$/, async () => {
        await telerikDemo.get();
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/telrikDemo.png');
        winston.info('I navigate to Telerik Page to click on Drop Down List');
    });
    Then(/^I click on "Drop Down List" link$/, async () => {
        await telerikDemo.dropDownList.click();
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/telrikDropDown.png');
        winston.info('I click on "Drop Down List"');
    });
    Then(/^I navigate to Drop Down List Page$/, async () =>{
        await global.waitforPage('dropdownlist');
        winston.info('I navigate to "Drop Down List" Page');
    });
    Then(/^I select a color from  "Color" drop down$/, async () =>{
        //await telerikDropDownDemo.colorDropDown.click();
    });
    Then(/^I select a size from "Size" drop down$/, async () =>{
        //await global.clickElementByClassname(telerikDropDownDemo.sizeDropDown,1);

    });
    Then(/^I click on "Customize" button$/, async () =>{
    });
