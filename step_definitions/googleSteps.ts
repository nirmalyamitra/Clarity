import {Given, When, Then} from 'cucumber'
import { googleSearchPage } from '../pages/googleSearchPage';
import { common } from '../common/common';
import { async } from 'q';

    let googleSearch = new googleSearchPage();
    let global = new common();
    
    Given(/^I navigate to Google Page$/, async () => {
        await googleSearch.get();
    });
    Then(/^I search for 'Feluda'$/, async() => {

    });

