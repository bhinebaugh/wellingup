import { Injectable } from '@angular/core';

@Injectable()
export class ReferenceService {
	pages: Array<any>;
	
	constructor() {
		this.pages = [
			'1997 Ephemera', 
			'Greater Boston (glossary and maps)', 
			'Quakerese', 
			'Mary Magdelene', 
			'Noli me tangere', 
			'Muchas Manos', 
			'Creating the story and website'
		]
	}
	
	getReferencePages() {
		return this.pages
	}
}
