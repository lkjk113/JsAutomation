const { Given, When, Then } = require('cucumber');
const assert = require('assert');

require('chromedriver');
var webdriver = require('selenium-webdriver')
By = webdriver.By,
  until = webdriver.until;
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

Given('I go to {string}', async function (url) {
  driver.get(url);
  return await driver.sleep(4000);
});

When('I input {string} in searchbox', async function (value) {
  return await driver.findElement(By.id('kw')).sendKeys(value);
});

Then('I click button search', async function () {
  return await driver.findElement(By.id('su')).click();
});

Then('I show see results more than {int}', async function (expnum) {
  driver.sleep(8000);
  let label = driver.findElement({ css: ".nums_text" }).getText();
  let num = (result + "").replace(/[^0-9]/ig, "");
  return await assert.ok(parseFloat(num) > parseFloat(expnum), "expect:" + expnum + ",actual:" + result);
});
