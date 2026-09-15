import {expect, type Locator, type Page} from '@playwright/test'








export class Footer {
	readonly page : Page;
	readonly footer : Locator;
	
	constructor(page:Page){
		this.page = page;
		this.footer = this.page.getByRole('contentinfo');
		
	};
	
	async exist(): Promise<void> {
		await expect(this.footer).toBeVisible();
	};
	
	async NewsLetter(text:string): Promise<void> {
		await expect(this.footer.getByText('Newsletter', {exact:true})).toBeVisible();
		await expect(this.footer.getByLabel(text, {exact:true})).toBeVisible();
		await expect(this.footer.getByRole('button', {name : 'Subscribe', exact : true})).toBeVisible();
    };
	
	async verifyContents(contents:Record<string, string[]>): Promise<void> {
		for (const title of Object.keys(contents)){
			await expect(this.footer.getByText(title, { exact:true })).toBeVisible();
			for (const link of contents[title]){
				await expect(this.footer.getByRole('link', {name : link})).toBeVisible();
				
			};
		};
		
	};
	async validateFooter(text:string, contents:Record<string, string[]>): Promise<void> {
		await this.exist();
		await this.NewsLetter(text);
		await this.verifyContents(contents);
	};
}