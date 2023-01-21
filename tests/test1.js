const { By, Key, Builder, Browser, until, Button } = require('selenium-webdriver')
require('chromedriver')

function getPlayer(driver){
    driver.wait(until.elementLocated(By.xpath('//ytd-player'))).then( el => {
        el.click().then(() => {
            console.log('player Click')
            return el
        })
    });

}

async function acceptTerms(driver){
    await driver.wait(until.elementLocated(By.xpath('//button[@aria-label="Accept the use of cookies and other data for the purposes described"]'))).then( el => {
        console.log("Terms loaded")
        el.click()
    });
}

async function test_case_one(){
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get('https://www.youtube.com/watch?v=fzBU-tcXt3U')

        await acceptTerms(driver)
        console.log("Terms Accepted")

        let player = await getPlayer(driver)
        console.log('player')



    }catch (e) {
        console.log(' Error start ')
        console.log(e)
        console.log(' Error end ')

    }finally {
        console.log('Finished')
        await driver.quit
    }


}

test_case_one()