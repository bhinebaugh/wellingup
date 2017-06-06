import { Injectable } from '@angular/core';
import { Page } from './page';
import { referencePages } from './mock-pages';

@Injectable()
export class ReferenceService {
	
	constructor() {
	}
	
	getReferencePages(): Promise<Page[]> {
		return Promise.resolve( referencePages )
	}

	getReferencePage(id: number) {
		return new Array(referencePages[id-1])
	}

}
