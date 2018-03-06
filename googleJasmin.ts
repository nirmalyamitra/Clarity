import { browser, element, by } from 'protractor';
import {googleSearchPage} from './pages/googleSearchPage';

describe ("Going to Write first test Using Page Object Model", ()=> {
    it("Should navigate to Google Page and Search for Dam", () => {
        let googleSearch = new googleSearchPage();
        googleSearch.get();
        googleSearch.searchBox.sendKeys('Dam');
        googleSearch.searchButton.click();

    });
    browser.sleep(5000);
});