import { test, expect } from '@playwright/test';

import {type Locator, type Page} from '@playwright/test'



type HeaderConfig = {
    link: string;
    subtext: string;
    languages: string[];
    categories: string[];
};

export class Header {
    readonly page:Page;
	readonly header:Locator;
	constructor(page:Page){
		this.page = page
	    this.header = page.getByRole('banner');
	}
	async exist(): Promise<void>{
		await expect(this.header).toBeVisible();
	}
    async hasIcon(link:string): Promise<void>{
	    const icon = this.header.locator(`img[src = "${link}"] `);	
		await expect(icon).toBeVisible();
    }
	async hasResearchBar(subtext:string): Promise<void>{
		const searchBar = this.header.getByPlaceholder(subtext);
		await expect(searchBar).toBeVisible();
	}
	async hasLanguageBar(languages: string[]): Promise<void>{
		const languageBar = this.header.getByLabel('Your Language:');
		await expect(languageBar).toBeVisible();
		for (const language of languages){
		    await expect(languageBar.getByRole('option', {name : language})).toBeVisible();			
		}
    }
	async hasMainNavigation(categories : string[]): Promise<void>{   
        const navigationBar = this.header.locator('#nav');
		await expect(navigationBar).toBeVisible();
		for (const categorie of categories) {
			await expect(navigationBar.getByRole('link', {name : categorie, exact:true})).toBeVisible();
		}
	}
    async hasHeaderIcons(): Promise<void>{
        await expect(this.header.getByRole('link', {name : 'Account'})).toBeVisible();
		await expect(this.header.getByRole('link', {name : 'Wishlist'})).toBeVisible();
		await expect(this.header.getByRole('link', {name : 'Cart'})).toBeVisible();
    }
    async validateHeader(config : HeaderConfig): Promise<void>{
        await this.exist();
		await this.hasIcon(config.link);
		await this.hasResearchBar(config.subtext);
		await this.hasLanguageBar(config.languages);
		await this.hasMainNavigation(config.categories);
		await this.hasHeaderIcons();
    }		
	}

}	