import {Given, When, Then} from 'cucumber'
import { facebookLoginPage } from '../pages/facebookLoginPage';
import { common } from '../common/common';
import { async } from 'q';
import { browser } from 'protractor';

    
    let global = new common();
    let facebookLogin = new facebookLoginPage();
    
    Given(/^I navigate to Facebook Page$/, async () => {
        await facebookLogin.get();
    });
    Then(/^I take the url and take a snap$/, async () => {
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/facebookLoginPage.png');
    });
    Then(/^I populate 'Email' and 'Password'$/, async () =>{
        await facebookLogin.emailIdBox.sendKeys('EmailId');
        await facebookLogin.passwordBox.sendKeys('password');
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/fbEmailPasswrd.png');
    });
    Then(/^I click on 'Log In' button$/, async () =>{
        await facebookLogin.loginButton.click();
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/fbWrongPasswrd.png');
    });