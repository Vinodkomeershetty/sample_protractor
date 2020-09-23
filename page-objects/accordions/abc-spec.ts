

const got = require('got');
// import *  as got from 'got';
// import { browser } from 'protractor';

// import got from "got/dist/source";

// import * as got from "/got/dist/source";

// import got from "got/dist/source";

describe('Marketing Plan API E2E WORKFLOW', () => {
 

  beforeAll(async () => {

    // await browser.waitForAngularEnabled(false);
    // expect(await browser.waitForAngularEnabled()).toBeFalsy();
    // browser.get("http://google.com");
    // await browser.driver.quit();
  });

  it('TEST E2E', async () => {
    await console.log('bbbbbbbbbbbbbbbbbbbb');
    const burl = 'https://reqres.in/api/users/2';
    const res = await got.get(burl).catch(error => {
      console.log('dddddddddddddddddd' + error);
      throw error;
    });

    const res1 = Promise.resolve(got.get(burl));
    const res2 = await got.get(burl);
    const res4 = await got(burl);
    await console.log(
      't1------------------------------>' +
        res1.then(t => {
          console.log(t.body);
        }),
    );
    await console.log('t4------------------------------>' + res2.body);
    await console.log('t5------------------------------>' + res4.body);
    const res5 = res1.then(t => t.body);
    await console.log('t6------------------------------>' + res5);

    await console.log('aaaaaaaaaaaaaaaaaaaa');
  });
});
