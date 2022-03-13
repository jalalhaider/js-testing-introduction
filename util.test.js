const pupeteer = require('puppeteer');

const { generateText } = require('./util');


test('should output name and age', () => {

    const text = generateText('Jalal', 28);

    expect(text).toBe("Jalal (28 years old)")

});


test('should click around',async () => {

    const browser = await pupeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    });

    const page = await browser.newPage();

    await page.goto('file:///Users/macbook/new_learning_2022/js-testing-introduction/index.html');
    await page.click('input#name');
    await page.type('input#name','Anna');
    await page.click('input#age');
    await page.type('input#age', '28');
    await page.click('button#btnAddUser');


},70000)