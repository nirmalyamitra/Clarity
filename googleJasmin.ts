import { browser, element, by } from 'protractor'

describe ("Goint to Write first test", ()=> {
    it("should pass without any issues", () => {
        browser.get("https://www.google.co.in");
        element(by.name('q')).sendKeys('Dam');
        element(by.name('btnK')).click();

    });
    browser.sleep(5000);
});