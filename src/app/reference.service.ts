import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from './environment';
import { Page } from './page';
// import { referencePages } from './mock-pages';

@Injectable()
export class ReferenceService {
	
	private handleError(error: any): Promise<any> {
		return Promise.reject( error.message || error )
	}

	constructor(private http: Http) {}
	
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
