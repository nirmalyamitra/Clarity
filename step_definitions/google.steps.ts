import { Given, When, Then } from 'cucumber'
import { googleSearchPage } from '../pages/googleSearchPage';
import { common } from '../common/common';
import { async } from 'q';
import { browser } from 'protractor';
import { dataFile } from '../hooks/scenarioHook';
var winston = require('winston');

let googleSearch = new googleSearchPage();
let global = new common();

Given(/^I navigate to Google Page to search for Value1$/, async () => {
    googleSearch.get();
    await global.highlight(googleSearch.searchButton);
    await global.readCurrentUrl();
    winston.info('I navigate to Google Page to search for '+(<any>dataFile.Value).searchValue1);
});
Then(/^I search for Value1$/, async () => {
    //await googleSearch.searchBox.sendKeys('Feluda');
    winston.info('Search Value1 Value : ', (<any>dataFile.Value).searchValue1);
    await googleSearch.searchBox.sendKeys((<any>dataFile.Value).searchValue1);
    winston.info('I search for '+(<any>dataFile.Value).searchValue1);
});
Then(/^I click on the 'Search Now' button$/, async () => {
    await googleSearch.searchButton.click();
    winston.info('I click on the Search Now button');
});
Then(/^I should see the listings of Value1$/, async () => {
    await global.waitforPage((<any>dataFile.Value).searchValue1);
    await global.readCurrentUrl();
    await global.writeScreenShot('reports/snaps/google.png');
    winston.info('I should see the listings of '+(<any>dataFile.Value).searchValue1);
});

Given(/^I navigate to Google Page to search for Value2$/, async () => {
    await googleSearch.get();
    await global.highlight(googleSearch.searchButton);
    await global.readCurrentUrl();
    winston.info('I navigate to Google Page to search for '+(<any>dataFile.Value).searchValue2);
});
Then(/^I search for Value2$/, async () => {
    //await googleSearch.searchBox.sendKeys('Dam');
    winston.info('Search Value2 Value : ', (<any>dataFile.Value).searchValue2);
    await googleSearch.searchBox.sendKeys((<any>dataFile.Value).searchValue2);
    winston.info('I search for ' +(<any>dataFile.Value).searchValue2);
});
Then(/^I click on the 'Search Now' button to search for Value2$/, async () => {
    await googleSearch.searchButton.click();
    winston.info('I click on the Search Now button to search for '+(<any>dataFile.Value).searchValue2);
});
Then(/^I should see the listings of Value2$/, async () => {
    await global.waitforPage((<any>dataFile.Value).searchValue2);
    await global.readCurrentUrl();
    await global.writeScreenShot('reports/snaps/googleDam.png');
    winston.info('I should see the listings of '+(<any>dataFile.Value).searchValue2);
});

