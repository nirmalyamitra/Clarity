import { browser, element, by } from 'protractor';
import { googleSearchPage } from './pages/googleSearchPage';
import { common } from './common/common';

describe("Going to Write first test Using Page Object Model", () => {
    let googleSearch = new googleSearchPage();
    let global = new common();
    it("Should navigate to Google Page and Search for Dam", async () => {
        await googleSearch.get();
        await global.highlight(googleSearch.searchButton);
        await global.readCurrentUrl();
        await googleSearch.searchBox.sendKeys('Hello World');
        await global.writeScreenShot('reports/snaps/google.png');
        await googleSearch.searchButton.click();
        await global.readCurrentUrl();
        //global.waitforPage('Dam');

    });
});