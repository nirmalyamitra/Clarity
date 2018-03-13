import { browser, element, by } from 'protractor';
import {googleSearchPage} from './pages/googleSearchPage';
import {common} from './common/common';

describe ("Going to Write first test Using Page Object Model", ()=> {
    it("Should navigate to Google Page and Search for Dam", () => {
        let googleSearch = new googleSearchPage();
        let global =new common();
        googleSearch.get();
        global.highlight(googleSearch.searchButton);
        global.readCurrentUrl();
        googleSearch.searchBox.sendKeys('Hello World');
        //global.writeScreenShot('google.png');
        googleSearch.searchButton.click();
        global.readCurrentUrl();
        //global.waitforPage('Dam');

    });
});