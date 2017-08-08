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
		return this.http.get('/posts?categories='+id)
			.toPromise()
			.then(response => response.json() as Page[])
			.catch(this.handleError)
	}

	getPage(id: number): Promise<Page> {
		// return Promise.resolve(narrativePages[id-1])
		var postUrl: string = '/posts/' + id.toString();
		return this.http.get( postUrl )
		.toPromise()
		.then(response => response.json() as Page );
	}

	getNarrativePages(): Promise<Page[]> {
		// return this.http.get('http://localhost/wp-json/wp/v2/posts?categories=2')
		return this.http.get('/posts?categories='+environment.narrativeCategory)
		.toPromise()
		.then(response => response.json() as Page[])
                .catch(this.handleError);
	}
	getNarrativePage(id: number): Promise<Page> {
		// return Promise.resolve(narrativePages[id-1])
		var postUrl: string = '/posts/' + id.toString();
		return this.http.get( postUrl )
		.toPromise()
		.then(response => response.json() as Page );
	}

	getNarrativeSubcategories() {
		console.log('get narrative subcats');
		return this.http.get('/categories')
		.map( resp => resp.json() )
		// this filter attempt returns all categories, as expected
		// .filter( (cat, idcat) => true)
		// .filter( function(cat, idcat) {
		// 	console.log('filtering... cat:', cat); // --> [Obj, Obj]
		// 	return true
		// })
		// now the Observable contains an array
		// and this of course works
		// .map( obj => obj)
		// while this examines each category object of the array
		// and only allows it through if it has 'narrative' as parent category
		.map( obj => obj.filter( (x : Category) => x.parent == environment.narrativeCategory) )

		// used to return a promise
		// .toPromise()
		// .then(response => response.json())
		// select only items that have narrative as parent
		// but this isn't the way to filter
		// .then(response => {
		// 	response.json().filter((cat,idx) => {return cat === 0})
		// }
	}

	getReferencePages(): Promise<Page[]> {
		//return Promise.resolve( referencePages )
		return this.http.get('/posts?categories='+environment.referenceCategory)
		.toPromise()
		.then( response => response.json() as Page[] )
		.catch( this.handleError )
	}

	getReferencePage(id: number): Promise<Page> {
		// return Promise.resolve( referencePages[id-1] );
		return this.http.get('/posts/'+id)
		.toPromise()
		.then( response => response.json() as Page )
		.catch( this.handleError )
	}

}
