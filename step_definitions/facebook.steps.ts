import {Given, When, Then} from 'cucumber'
import { facebookLoginPage } from '../pages/facebookLoginPage';
import { common } from '../common/common';
import { async } from 'q';
import { browser } from 'protractor';
var console = require('winston');

    
    let global = new common();
    let facebookLogin = new facebookLoginPage();
    
    Given(/^I navigate to Facebook Page$/, async () => {
        await facebookLogin.get();
        console.info('I navigate to Facebook Page');
    });
    Then(/^I take the url and take a snap$/, async () => {
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/facebookLoginPage.png');
        console.info('I take the url and take a snap');
    });
    Then(/^I populate 'Email' and 'Password'$/, async () =>{
        await facebookLogin.emailIdBox.sendKeys('EmailId');
        await facebookLogin.passwordBox.sendKeys('password');
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/fbEmailPasswrd.png');
        console.info('I populate Email and Password');
    });
    Then(/^I click on 'Log In' button$/, async () =>{
        await facebookLogin.loginButton.click();
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/fbWrongPasswrd.png');
        console.info('I click on Log In button');
    });