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

	
});


test('verify footer', async ({page}) => {



}
)
;


test('Sign up', async ({page}) => {
await page.goto('https://demo.mahocommerce.com/');
await page.waitForTimeout(2000);
const Acct_button = page.getByRole('link', {name: 'Account', exact : true});
//await expect(Acct_button).toBeAttached();
await Acct_button.click();
await page.getByText('Create an account', {exact: true}).click();
const form = page.getByRole('form', {name : 'Registration Form'});
await form.getByLabel('First Name', {exact:true}).fill('Mehdi');
await form.getByLabel('Last Name', {exact:true}).fill('Bouricha');
await form.getByLabel('Email Address', {exact:true}).fill('amine.kajjou@outlook.fr');
await form.getByLabel('Password', {exact:true}).fill('12345678');
await form.getByLabel('Confirm Password', {exact:true}).fill('12345678');
await expect(form.getByRole('checkbox', {name : 'Remember Me', exact:true})).toBeChecked();
await form.getByRole('checkbox', {name : 'Remember Me', exact:true}).uncheck();
await form.getByRole('button', {name : 'Register',exact:true}).click();
//await page.waitForTimeout(20000);
}
)


;

test('Sign in', async({page}) => {

//go to main page
await page.goto('https://demo.mahocommerce.com/');
await page.waitForTimeout(2000);
//verify header existance
const header = page.locator('#header');
await expect(header).toBeVisible();

//sign-in
const Acct_button = page.getByRole('link', {name: 'Account', exact : true});
await expect(Acct_button).toBeVisible();
await Acct_button.click();
await page.locator('label[for = "tab-login"]').click();
const login_form = page.getByRole('form', {name : 'Login Form'});
await login_form.getByLabel('Email Address').fill('amine.kajjou@outlook.fr');
await login_form.getByLabel('Password').fill('12345678');
const remember = login_form.getByRole('checkbox', {name : 'Remember Me'});
await expect(remember).toBeChecked();
await remember.check();
await login_form.getByRole('button', {name : 'Login'}).click();
}
)
;

test('Remember', async({page}) => {
await page.goto('https://demo.mahocommerce.com/');
await page.waitForTimeout(2000);
//verify header existance
const header = page.locator('#header');
await expect(header).toBeVisible();
const side_bar = page.getByRole('aside', {name : 'Primary sidebar'});
await expect(side_bar).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'Account Dashboard'})).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'Account Information'})).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'Address Book'})).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'My Orders'})).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'My Wishlist'})).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'Newsletter'})).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'Gift Card Balance'})).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'Logout'})).toBeVisible();
await side_bar.getByRole('link', {name : 'Logout'}).click();
await expect(page.getByText('You are now logged out')).toBeVisible();
await expect(page.getByText('You have logged out and will be redirected to our homepage in 5 seconds.')).toBeVisible();
}) //test KO car pas de remember suite à la fermeture du site
;

test(




test('Sign in with log out', async({page}) => {

//go to main page
await page.goto('https://demo.mahocommerce.com/');
await page.waitForTimeout(2000);
//verify header existance
const header = page.locator('#header');
await expect(header).toBeVisible();

//sign-in
const Acct_button = page.getByRole('link', {name: 'Account', exact : true});
await expect(Acct_button).toBeVisible();
await Acct_button.click();
await page.locator('label[for = "tab-login"]').click();
const login_form = page.getByRole('form', {name : 'Login Form'});
await login_form.getByLabel('Email Address').fill('amine.kajjou@outlook.fr');
await login_form.getByLabel('Password').fill('12345678');
const remember = login_form.getByRole('checkbox', {name : 'Remember Me'});
await expect(remember).toBeChecked();
await remember.check();
await login_form.getByRole('button', {name : 'Login'}).click();

// page verification after signing-in
await expect(header).toBeVisible();
const side_bar = page.getByRole('complementary', {name : 'Primary sidebar'});
await expect(side_bar).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'Account Dashboard'})).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'Account Information'})).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'Address Book'})).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'My Orders'})).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'My Wishlist'})).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'Newsletter'})).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'Gift Card Balance'})).toBeVisible();
await expect(side_bar.getByRole('link', {name : 'Logout'})).toBeVisible();
// signing-out

await side_bar.getByRole('link', {name : 'Logout'}).click();
await expect(page.getByText('You are now logged out')).toBeVisible();
await expect(page.getByText('You have logged out and will be redirected to our homepage in 5 seconds.')).toBeVisible();
await expect(page).toHaveURL('https://demo.mahocommerce.com/', {timeout : 5000}); //KO en 5 sec, OK en 8 sec
}
)
;