import { test, expect } from '@playwright/test';


test('test_1', async({page}) => {

await page.goto("https://demo.mahocommerce.com/");
await page.waitForTimeout(2000);
 
});


