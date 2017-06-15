import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Page } from './page';
import { narrativePages } from './mock-pages';

@Injectable()
export class NarrativeService {

	private wpapi = 'http://localhost/wp-json/wp/v2/';
	//private postsIndex: string = this.wpapi + 'posts?categories=2';
	private postsIndex: string = this.wpapi + 'posts?categories=1';
        
        private handleError(error: any): Promise<any> {
                return Promise.reject( error.message || error );
        }
	
	constructor(private http: Http) {}
	
	getNarrativePages(): Promise<Page[]> {
		// http://localhost/wp-json/wp/v2/posts?categories=2
		return this.http.get(this.postsIndex)
		.toPromise()
		.then(response => response.json() as Page[])
                .catch(this.handleError);
	}
	getNarrativePage(id: number): Promise<Page> {
		//return new Array(narrativePages[id-1])
		// TODO: find this.narrativePages where id = id
		// return Promise.resolve(narrativePages[id-1])
		var postUrl: string = this.wpapi + 'posts/' + id.toString();
		return this.http.get(postUrl)
		.toPromise()
		.then(response => response.json() as Page );
	}
}
