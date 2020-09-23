import { browser, Config } from 'protractor';

export let config: Config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
   //seleniumAddress: 'http://10.96.195.93:4444/wd/hub',
  
   specs: [ '../../page-objects/accordions/abc-spec.ts'],

  // Timeouts
  allScriptsTimeout: 250000,
  getPageTimeout: 650000,
  directConnect: true,
  restartBrowserBetweenTests: false,
  ignoreUncaughtExceptions: true,     // Do not completely terminate process when exceptions encountered

  // You could set no globals to true to avoid jQuery '$' and protractor '$' collisions on the global namespace.
  noGlobals: false,     // However, this is required to be false in order to avoid issues with Node_Modules - See: "ReferenceError: browser is not defined when using protractor with typescript"

  params: {

    //Prod url - https://www.servus.ca/
    // Test url - https://publicsite-qa-sc91-cd.azurewebsites.net/
    baseurl: 'https://www.servus.ca/'
    },

  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    'chromeOptions': {
      args: ['--no-sandbox', '--test-type=browser', "--allow-insecure-localhost"],
      useAutomationExtension: false
    }
     
  },
 
 

  beforeLaunch: () => {

  },

  onPrepare: () => {
    browser.ignoreSynchronization = false;   // Might not be required
    

  },

  onComplete: () => {
    // TODO
  },

  onCleanUp: (exitCode) => {
    // TODO
  },

  afterLaunch: () => {
    // TODO
  }
};