import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { environment } from './environment';
import { Category } from './category';
import { Page } from './page';
import { Comment } from './comment';
// import { narrativePages } from './mock-pages';

export interface Category {
	id: number;
	name: string;
	slug: string;
}

@Injectable({
	providedIn: 'root'
})
export class ContentService {

	private handleError(error: any): Promise<any> {
			return Promise.reject( error.message || error );
	}
	
	constructor(private http: HttpClient) {}
	
	getCategory(id : number) : Observable<Category> {
		return this.http.get<Category>('/categories/'+id)
			// .toPromise()
			// .then(response => response.json() as Category)
			// .catch(this.handleError)
	}

	getPagesForCategory(id : number) : Observable<Page[]> {
		return this.http.get<Page[]>('/posts?categories='+id+'&per_page=100') // avoid 10-item default
	}

	getSubcategoriesForCategory(categoryId : number): Observable<Category[]> {
		return this.http.get<Category[]>(
			'/categories?per_page=100' // avoid the 10-item default
		);
		// .map( resp => resp.json() )
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
		// .map( obj => obj.filter( (x : Category) => x.parent == categoryId) )

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
		this.http.get<Page[]>('/posts?sticky=1')
	}

	getPage(id: number): Promise<Page> {
		// return Promise.resolve(narrativePages[id-1])
		var postUrl: string = '/posts/' + id.toString();
		return this.http.get<Page>( postUrl )
		.toPromise()
		// .then(response => response.json() as Page );
		.then( r => r as Page )
	}
	getCommentsForPage(id: number) {
		var postUrl: string = '/comments?post=' + id;
		// all comments: 'https://wellingup.net/wellingup/wp-json/wp/v2/comments'
		// context=embed or =view (default)
		return this.http.get<Comment[]>( postUrl )
		// .toPromise()
		// .then(response => response.json())
		// return new Array()
		// var itsanarrayalreadytypescript: Array<object>;
		// return Promise.resolve( itsanarrayalreadytypescript )
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

	postComment(comment: Comment) {
		let url = '/comments';
		// customRequestOptions is not in effect for POST requests
		// the way it does for GET requests above, so hard coding url:
		this.http.post(
			'https://wellingup.net/wellingup/wp-json/wp/v2/comments',
			comment
			// {
			// 	author_email: "me@example.com",
			// 	author_name: "Me",
			// 	content: "test from http.post",
			// 	post: postId
			// }
		)
		// FIXME
		// .map( resp => console.log(resp.json()) )
		// .toPromise()
		// .then( resp => {
		// 	console.log( resp.json() )
		// })
		// .catch(this.handleCommentSubmitError)
	}

	handleCommentSubmitError() {
		console.log('error posting comment')
		// show feedback in component
	}
}
