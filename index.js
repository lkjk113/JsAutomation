require('chromedriver');
var webdriver = require('selenium-webdriver')
By = webdriver.By,
until = webdriver.until;
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://www.baidu.com');
driver.sleep(8000);
driver.findElement(By.id('kw')).sendKeys('webdriver');
driver.findElement(By.id('su')).click();


