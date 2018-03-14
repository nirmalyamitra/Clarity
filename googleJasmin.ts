import { browser, element, by } from 'protractor';
import { googleSearchPage } from './pages/googleSearchPage';
import { common } from './common/common';
var console = require('winston');

describe("Going to Write first test Using Page Object Model", () => {
    let googleSearch = new googleSearchPage();
    let global = new common();
    it("Should navigate to Google Page and Search for Dam", async () => {
        console.log('info', 'Should navigate to Google Page and Search for Dam');
        console.info('Going to Write first test Using Page Object Model');
        googleSearch.get();
        global.highlight(googleSearch.searchButton);
        global.readCurrentUrl();
        googleSearch.searchBox.sendKeys('Dam');
        global.writeScreenShot('reports/snaps/google.png');
        googleSearch.searchButton.click();
        global.readCurrentUrl();
        //global.waitforPage('Dam');

    });
});