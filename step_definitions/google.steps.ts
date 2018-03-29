import {Given, When, Then} from 'cucumber'
import { googleSearchPage } from '../pages/googleSearchPage';
import { common } from '../common/common';
import { async } from 'q';
import { browser } from 'protractor';

    let googleSearch = new googleSearchPage();
    let global = new common();
    
    Given(/^I navigate to Google Page to search for Feluda$/, async () => {
        await googleSearch.get();
        await global.highlight(googleSearch.searchButton);
        await global.readCurrentUrl();
    });
    Then(/^I search for Feluda$/, async () => {
        await googleSearch.searchBox.sendKeys('Feluda');
    });
    Then(/^I click on the Search Now button$/, async () => {
        await googleSearch.searchButton.click();
    });
    Then(/^I should see the listings of Feluda$/, async () => {
        await global.waitforPage('Feluda');
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/google.png');
    });

    Given(/^I navigate to Google Page to search for Dam$/, async () => {
        await googleSearch.get();
        await global.highlight(googleSearch.searchButton);
        await global.readCurrentUrl();
    });
    Then(/^I search for Dam$/, async() => {
        await googleSearch.searchBox.sendKeys('Dam');
    });
    Then(/^I click on the Search Now button to search for Dam$/, async () => {
        await googleSearch.searchButton.click();
    });
    Then(/^I should see the listings of Dam$/, async () => {
        await global.waitforPage('Dam');
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/googleDam.png');
    });

