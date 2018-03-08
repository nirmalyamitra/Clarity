import {browser, element, by, ExpectedConditions} from 'protractor';
import { Buffer } from 'buffer';
import fs = require('fs');

export class common {

    highlight(element){
        for (var i=0;i<10; i++){
            browser.executeScript(
                "arguments[0].setAttribute('style', arguments[1]);",
                element, "color: red; border:3px solid red;");

            browser.executeScript(
                "arguments[0].setAttribute('style', arguments[1]);",
                element, ""
            );
        }
    }

    writeScreenShot(filename){
        browser.takeScreenshot().then(function (png){
            var stream =fs.createWriteStream(filename);
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
    }

    waitforPage(pageUrl){
        let condition = ExpectedConditions.urlContains(pageUrl);
        browser.wait(condition, 60000);
    }

    waitForElement(element){
        let condition =ExpectedConditions.presenceOf(element);
        browser.wait(condition, 60000);
    }


}