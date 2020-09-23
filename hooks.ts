import { After, Before, Status } from "cucumber"
import { browser } from 'protractor'

Before(async () => {
    console.log("\tBefore Test");
    await browser.manage().window().maximize();
    await browser.manage().deleteAllCookies();
    await browser.manage().timeouts().pageLoadTimeout(30000);
    await browser.manage().timeouts().implicitlyWait(10000);
});

After(async (scenario) => {
    const scenarioName = scenario.pickle.name;
    console.log("\tEnd of Scenario: " + scenarioName);
    if (scenario.result.status === Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        // await this.attach(screenshot, 'image/png');
        console.log("\tEnd of Test");
    }
    
})