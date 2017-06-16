import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from './environment';
import { Page } from './page';
// import { narrativePages } from './mock-pages';

@Injectable()
export class NarrativeService {

        private handleError(error: any): Promise<any> {
                return Promise.reject( error.message || error );
        }
	
	constructor(private http: Http) {}
	
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
}
