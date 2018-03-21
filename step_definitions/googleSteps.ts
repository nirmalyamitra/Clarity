import {Given, When, Then} from 'cucumber'
import { googleSearchPage } from '../pages/googleSearchPage';
import { common } from '../common/common';

    let googleSearch = new googleSearchPage();
    let global = new common();
    
    Given(/^I navigate to Google Page$/, async () => {
        await googleSearch.get();

    });