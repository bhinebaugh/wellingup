import { Injectable } from '@angular/core';

@Injectable()
export class ReferenceService {
	pages: Array<any>;
	
	constructor() {
		this.pages = [
			{id: '1', slug:'/reference/1', title: '1997 Ephemera', content: 'placeholder'},
			{id: '2', slug:'/reference/2', title: 'Greater Boston (glossary and maps)',  content: 'placeholder'},
			{id: '3', slug:'/reference/3', title: 'Quakerese',  content: 'placeholder'},
			{id: '4', slug:'/reference/4', title: 'Mary Magdelene',  content: 'placeholder'},
			{id: '5', slug:'/reference/5', title: 'Noli me tangere',  content: 'placeholder'},
			{id: '6', slug:'/reference/6', title: 'Muchas Manos',  content: 'placeholder'},
			{id: '7', slug:'/reference/7', title: 'Creating the story and website', content: 'placeholder'}
		]
	}
	
	getReferencePages() {
		return this.pages
	}

	getReferencePage(id: number) {
		return new Array(this.pages[id-1])
	}

}
