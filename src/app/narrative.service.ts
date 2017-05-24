import { Injectable } from '@angular/core';

@Injectable()
export class NarrativeService {
	narrativePages: Array<any>;
	
	constructor() {
		this.narrativePages = [
			"There is mystery", "Forgiveness", "Touch", "People in Jewel's life", "Rocco's story"	
		]	
	}
	
	getNarrativePages() {
		return this.narrativePages	
	}
}