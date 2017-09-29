import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { environment } from './environment';
import { Category } from './category';
import { Page } from './page';
// import { narrativePages } from './mock-pages';

@Injectable()
export class ContentService {

	private handleError(error: any): Promise<any> {
			return Promise.reject( error.message || error );
	}
	
	constructor(private http: Http) {}
	
	getCategory(id : number) : Promise<Category> {
		return this.http.get('/categories/'+id)
			.toPromise()
			.then(response => response.json() as Category)
			.catch(this.handleError)
	}

	getPagesForCategory(id : number) : Promise<Page[]> {
		return this.http.get('/posts?categories='+id+'&per_page=100') // avoid 10-item default
			.toPromise()
			.then(response => response.json() as Page[])
			.catch(this.handleError)
	}

	getSubcategoriesForCategory(categoryId : number) {
		return this.http.get('/categories?per_page=100') // avoid the 10-item default
		.map( resp => resp.json() )
		// this filter attempt returns all categories, as expected
		// .filter( (cat, idcat) => true)
		// .filter( function(cat, idcat) {
		// 	console.log('filtering... cat:', cat); // --> [Obj, Obj]
		// 	return true.filter( (cat, idcat) => true)
		// })
		// now the Observable contains an array
		// and this of course works
		// .map( obj => obj)
		// while this examines each category object of the array
		// and only allows it through if it has 'narrative' as parent category
		.map( obj => obj.filter( (x : Category) => x.parent == categoryId) )

		// used to return a promise
		// .toPromise()
		// .then(response => response.json())
		// select only items that have narrative as parent
		// but this isn't the way to filter
		// .then(response => {
		// 	response.json().filter((cat,idx) => {return cat === 0})
		// }
	}

	getPagesForFrontPage() {
		// pages that should appear on landing page, in roots section
		// are set to 'sticky' in WordPress
		// '/posts?sticky=1'
		this.http.get('/posts?sticky=1')
		.toPromise()
		.then(response => response.json() as Page);
	}

	getPage(id: number): Promise<Page> {
		// return Promise.resolve(narrativePages[id-1])
		var postUrl: string = '/posts/' + id.toString();
		return this.http.get( postUrl )
		.toPromise()
		.then(response => response.json() as Page );
	}

	getNarrativePages() {
		return this.getPagesForCategory(environment.narrativeCategory)
	}
	getNarrativePage(id: number) {
		return this.getPage(id)
	}
	getReferencePages() {
		return this.getPagesForCategory(environment.referenceCategory)
	}
	getReferencePage(id: number) {
		return this.getPage(id)
	}

	getNarrativeSubcategories() {
		console.log('get narrative subcats');
		return this.getSubcategoriesForCategory(environment.narrativeCategory);
	}

}
