import {browser, element, by, $$, $} from 'protractor';

export class GoogleSearchPage {

    searchBox = element(by.name('q'));
    searchButton = element(by.name('btnK'));


}