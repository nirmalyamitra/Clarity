import {browser, element, by, $$, $} from 'protractor';

export class googleSearchPage {

    searchBox = element(by.name('q'));
    searchButton = element(by.name('btnK'));

    get() {
        browser.get("http://www.google.com");
    }


}