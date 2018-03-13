import {Config, browser} from 'protractor';
import fs = require('fs');

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
    browser.driver.fullscreen();
    
    fs.truncate('reports/url.txt', 0, function(){
      console.log('done')
    });

},
  specs: [ './googleJasmin.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};