const assert = require('assert').strict;
const { Given, When, Then } = require('cucumber');
const { Builder } = require('selenium-webdriver');

async function navigate() {
    // Webdriver declaration
    let driver = await new Builder().forBrowser('firefox').build();
    driver.get('https://nabil-hammami.github.io/POC/');
    await driver.findElement(By.name('menuHome')).click();
    //await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver && driver.quit();
}


Given('I visit my website', function () {
    return ;
});


When('I click on HOME button', function () {
    navigate();
});

Then('the HOME page must be displayed', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
