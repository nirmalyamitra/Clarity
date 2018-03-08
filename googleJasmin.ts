import { browser, element, by } from 'protractor';
import {googleSearchPage} from './pages/googleSearchPage';
import {common} from './common/common';

describe ("Going to Write first test Using Page Object Model", ()=> {
    it("Should navigate to Google Page and Search for Dam", () => {
        let googleSearch = new googleSearchPage();
        let global =new common();
        googleSearch.get();
        global.highlight(googleSearch.searchButton);
        googleSearch.searchBox.sendKeys('Dam');
        //global.writeScreenShot('google.png');
        googleSearch.searchButton.click();
        global.waitforPage('Dam');

    });
    browser.sleep(5000);
});