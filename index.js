import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({
        defaultViewport: null,
        headless: false,
        ignoreHTTPSErrors: true,
        args: ['--start-maximized']
    })
    const page = await browser.newPage();
    await page.goto('https://jkt48.com/');
    await page.waitForSelector('#header-global__pc--menu__user a');
    await page.click("#header-global__pc--menu__user a");
})();