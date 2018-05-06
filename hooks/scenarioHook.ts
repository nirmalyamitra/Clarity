import {Before, After, BeforeAll, Status, defineSupportCode, setDefaultTimeout, AfterAll} from 'cucumber';
import { async } from 'q';
import { browser } from 'protractor';
import { Buffer } from 'buffer';

setDefaultTimeout(120000);

BeforeAll(async() => {
    console.log('Starting the application');

});

After(async function (Scenario) {
    if(Scenario.result.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});




