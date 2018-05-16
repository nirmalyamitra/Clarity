import {browser, element, by, ExpectedConditions} from 'protractor';
import { Buffer } from 'buffer';
import fs = require('fs');
var date = new Date();

export class common {

    async highlight(element){
        for (var i=0;i<10; i++){
            await browser.executeScript(
                "arguments[0].setAttribute('style', arguments[1]);",
                element, "color: red; border:3px solid red;");

            await browser.executeScript(
                "arguments[0].setAttribute('style', arguments[1]);",
                element, ""
            );
        }
    }

    async writeScreenShot(filename){
        await browser.takeScreenshot().then(function (png){
            var stream =fs.createWriteStream(filename);
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
    }

    async waitforPage(pageUrl){
        let condition = ExpectedConditions.urlContains(pageUrl);
        await browser.wait(condition, 60000);
    }

    async waitForElement(element){
        let condition =ExpectedConditions.presenceOf(element);
        await browser.wait(condition, 60000);
    }

    async readCurrentUrl(){
        await browser.getCurrentUrl().then(function(url) {
            var t = date.toTimeString();
            var time = t.slice(0,9)
            fs.appendFile('reports/url.txt',time+" ", function (err) {
                if (err) throw err;
            });
            fs.appendFile('reports/url.txt',url +"\n", function (err) {
                if (err) throw err;
              });
          });
    }

    async selectOptions(){
        
    }


}