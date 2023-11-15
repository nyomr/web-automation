import puppeteer from "puppeteer";

async function main() {
    const browser = await puppeteer.launch({
        defaultViewport: null,
        headless: false,
        ignoreHTTPSErrors: true,
        args: ['--start-maximized']
    })
    const page = await browser.newPage();
    await page.goto('https://jkt48.com/');
    
    const element = await page.$('[href="/login?lang=id"]');
    await element.click();

    

    await element.type("#login_id", "email@gmail.com");
}

main();