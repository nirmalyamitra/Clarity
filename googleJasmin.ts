import { browser, element, by } from 'protractor';
import { googleSearchPage } from './pages/googleSearchPage';
import { common } from './common/common';
var winston = require('winston');

describe("Going to Write first test Using Page Object Model", () => {
    let googleSearch = new googleSearchPage();
    let global = new common();
    it("Should navigate to Google Page and Search for Dam", async () => {
        winston.log('info', 'Hello distributed log files!');
        winston.info('Hello again distributed logs');
        await googleSearch.get();
        await global.highlight(googleSearch.searchButton);
        await global.readCurrentUrl();
        //await googleSearch.searchBox.sendKeys('Dam');
        await global.writeScreenShot('reports/snaps/google.png');
        await googleSearch.searchButton.click();
        await global.readCurrentUrl();
        //global.waitforPage('Dam');

    });
});