import { Component } from '@angular/core';

import { NarrativeService } from './narrative.service';

@Component({
  selector: 'narrative',
  template: `
  <ul>
    <li *ngFor="let page of pages">{{ page }}</li>
  </ul>
  `,
  providers: [ NarrativeService ]
})
export class NarrativeComponent {
	pages: Array<any>;

	constructor( narrativeService:NarrativeService ) {
		this.pages = narrativeService.getNarrativePages();
	}
}
