import { Injectable } from '@angular/core';
import { Page } from './page';
import { narrativePages } from './mock-pages';

@Injectable()
export class NarrativeService {
	
	constructor() {}
	
	getNarrativePages(): Promise<Page[]> {
		// http://localhost/wp-json/wp/v2/posts?categories=2
		return Promise.resolve(narrativePages)
	}
	getNarrativePage(id: number) {
		return new Array(narrativePages[id-1])
		//find this.narrativePages where id = id
	}
}