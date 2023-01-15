const { By, Key, Builder, Browser, until, Button } = require('selenium-webdriver')
require('chromedriver')

async function test_case_one(){
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get('https://www.youtube.com/watch?v=fzBU-tcXt3U')
        await driver.wait(until.elementLocated(By.xpath('//button/div/span[contains(text(),"Accept all")]')),1000).then(() => {
            console.log("Terms loaded")
        });
        await driver.findElement(By.xpath('//button[@aria-label="Accept the use of cookies and other data for the purposes described"]')).click().then(() => {
            console.log("Terms Accpeted")
        })
        await driver.findElement(By.id('player')).click()


    }catch (e) {
        console.log(' Error start ')
        console.log(e)
        console.log(' Error end ')

    }finally {
        await driver.quit
    }


}

test_case_one()