import { browser } from 'protractor'

describe ("Goint to Write first test", ()=> {
    it("should pass without any issues", () => {
        browser.get("https://www.google.com");
    });
});