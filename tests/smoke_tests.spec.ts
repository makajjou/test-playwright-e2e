import { expect, test } from '@playwright/test';





/*test('visit the main page', async ({page}) => {

await page.goto('https://demo.mahocommerce.com/');
const icon = page.locator('img[src = "https://demo.nopcommerce.com/Themes/DefaultClean/Content/images/logo.png"]');
await expect(icon).toBeVisible();
const search_store = page.getByRole('textbox', {id : 'small-searchterms'});
await search_store.fill('Computer');
await page.getByRole('button', {text : 'search'}).click();

const manufacturer_section = page.locator('section', { hasText : 'Manufacturers'});
const Tags_section = page.locator('section', { hasText : 'Popular Tags'});
await expect(manufacturer_section).toBeVisible();
await expect(Tags_section).toBeVisible();
})
;*/


test('visit the main page', async ({page}) => {
await page.goto('https://demo.mahocommerce.com/');
await page.waitForTimeout(2000);
const icon = page.locator('img[src = "https://demo.mahocommerce.com/skin/frontend/base/default/images/logo.svg"]');
const home_button = page.getByLabel('Go To Home Page');
await expect(icon).toBeVisible();
await home_button.click();
await expect(page).toHaveURL('https://demo.mahocommerce.com/');

	
})

test('Sign up', async ({page}) => {
await page.goto('https://demo.mahocommerce.com/');
await page.waitForTimeout(2000);
const Acct_button = page.getByRole('link', {name: 'Account'});
//await expect(Acct_button).toBeAttached();
await Acct_button.click();
}
)
;