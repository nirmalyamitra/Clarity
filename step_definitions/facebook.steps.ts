import {Given, When, Then} from 'cucumber'
import { googleSearchPage } from '../pages/googleSearchPage';
import { common } from '../common/common';
import { async } from 'q';
import { browser } from 'protractor';

    
    let global = new common();
    
    Given(/^I navigate to Facebook Page$/, async () => {
        await browser.get("https://www.facebook.com");
    });
    Then(/^I take the url and take a snap$/, async () => {
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/facebook.png');
    });