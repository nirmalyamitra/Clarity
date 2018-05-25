import {Given, When, Then} from 'cucumber'
import { facebookLoginPage } from '../pages/facebookLoginPage';
import { common } from '../common/common';
import { async } from 'q';
import { browser } from 'protractor';
import { dataFile } from '../hooks/scenarioHook';
var winston = require('winston');

    let global = new common();
    let facebookLogin = new facebookLoginPage();
    
    Given(/^I navigate to Facebook Page$/, async () => {
        await facebookLogin.get();
        winston.info('I navigate to Facebook Page');
    });
    Then(/^I take the url and take a snap$/, async () => {
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/facebookLoginPage.png');
        winston.info('I take the url and take a snap');
    });
    Then(/^I populate 'Email' and 'Password'$/, async () =>{
        winston.info('I populate Email and Password');        
        winston.info('Data File : ', dataFile);
        winston.info('Email Id Value : ', (<any>dataFile.Value).emailId);
        winston.info('Password Value : ', (<any>dataFile.Value).password);
        await facebookLogin.emailIdBox.sendKeys((<any>dataFile.Value).emailId);
        await facebookLogin.passwordBox.sendKeys((<any>dataFile.Value).password);
        await facebookLogin.passwordBox.sendKeys('password');
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/fbEmailPasswrd.png');
    });
    Then(/^I click on 'Log In' button$/, async () =>{
        await facebookLogin.loginButton.click();
        await global.readCurrentUrl();
        await global.writeScreenShot('reports/snaps/fbWrongPasswrd.png');
        winston.info('I click on Log In button');
    });