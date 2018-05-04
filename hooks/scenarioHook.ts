import {Before, After, BeforeAll, Status, defineSupportCode, setDefaultTimeout, AfterAll} from 'cucumber';
import { async } from 'q';
import { browser } from 'protractor';
import { Buffer } from 'buffer';

setDefaultTimeout(120000);

BeforeAll(async() => {
    console.log('Starting the application');

});

After('Step Result', async (Scenario) => {
    console.log('After every Feature');
    if(Scenario.result.status == Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});

AfterAll(async() =>{
    console.log('exiting the application');

});




