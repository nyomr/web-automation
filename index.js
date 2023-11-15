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
    
    await page.click('[href="/login?lang=id"]');

}

main();