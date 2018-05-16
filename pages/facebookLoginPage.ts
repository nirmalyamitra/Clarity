import { browser, element, by, $$, $ } from 'protractor';
import { idType, basePage } from './basePage';

const locators = {
    emailIdBox: {
        type: idType[idType.id],
        value: "email"  
    },
    
    passwordBox: {
        type: idType[idType.id],
        value: "pass"
    },

    loginButton :{
        type: idType[idType.className],
        value: "uiButton uiButtonConfirm"
    }
}

export class facebookLoginPage extends basePage {

    emailIdBox = this.ElementLocator(locators.emailIdBox);
    passwordBox = this.ElementLocator(locators.passwordBox);
    loginButton = this.ElementLocator(locators.loginButton);


    // searchBox = element(by.name('q'));
    // searchButton = element(by.name('btnK'));

    async get() {
        await browser.get("http://www.facebook.com");
    }


}