import { Before, After, BeforeAll, Status, defineSupportCode, setDefaultTimeout, AfterAll } from 'cucumber';
import { async } from 'q';
import { browser } from 'protractor';
import { Buffer } from 'buffer';
import * as json from 'load-json-file'
var winston = require('winston');

export const dataFile = {'Value':'1234'};

setDefaultTimeout(120000);

BeforeAll(async () => {
    console.log('Starting the application');
    await json("./step_definitions/dataFile.json").then((data) => {
        console.log(data);
        dataFile.Value = data;
        winston.info(data);
    });
});

After(async function (Scenario) {
    if (Scenario.result.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});

