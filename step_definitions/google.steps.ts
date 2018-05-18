import {Given, When, Then} from 'cucumber'
import { googleSearchPage } from '../pages/googleSearchPage';
import { common } from '../common/common';
import { async } from 'q';
import { browser } from 'protractor';
var console = require('winston');

    let googleSearch = new googleSearchPage();
    let global = new common();
    
    Given(/^I navigate to Google Page to search for Feluda$/, async () => {
        await googleSearch.get();
        await global.highlight(googleSearch.searchButton);
        await global.readCurrentUrl();
        console.info('I navigate to Google Page to search for Feluda');
    });
    Then(/^I search for Feluda$/, async () => {
        await googleSearch.searchBox.sendKeys('Feluda');
        console.info('I search for Feluda');
    });
    Then(/^I click on the Search Now button$/, async () => {
        await googleSearch.searchButton.click();
        console.info('I click on the Search Now button');
    });
    Then(/^I should see the listings of Feluda$/, async () => {
        await global.waitforPage('Feluda');
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/google.png');
        console.info('I should see the listings of Feluda');
    });

    Given(/^I navigate to Google Page to search for Dam$/, async () => {
        await googleSearch.get();
        await global.highlight(googleSearch.searchButton);
        await global.readCurrentUrl();
        console.info('I navigate to Google Page to search for Dam');
    });
    Then(/^I search for Dam$/, async() => {
        await googleSearch.searchBox.sendKeys('Dam');
        console.info('I search for Dam');
    });
    Then(/^I click on the Search Now button to search for Dam$/, async () => {
        await googleSearch.searchButton.click();
        console.info('I click on the Search Now button to search for Dam');
    });
    Then(/^I should see the listings of Dam$/, async () => {
        await global.waitforPage('Dam');
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/googleDam.png');
        console.info('I should see the listings of Dam');
    });

