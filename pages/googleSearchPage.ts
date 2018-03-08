import { browser, element, by, $$, $ } from 'protractor';
import { idType, basePage } from './basePage';

const locators = {
    searchBox: {
        type: idType[idType.name],
        value: "q"  
    },
    
    searchButton: {
        type: idType[idType.name],
        value: "btnK"
    }
}

export class googleSearchPage extends basePage {

    searchBox = this.ElementLocator(locators.searchBox);
    searchButton = this.ElementLocator(locators.searchButton);

    // searchBox = element(by.name('q'));
    // searchButton = element(by.name('btnK'));

    get() {
        browser.get("http://www.google.com");
    }


}