import { Component } from '@angular/core';

import { NarrativeService } from './narrative.service';

@Component({
  selector: 'narrative',
  template: `
  <ul>
    <li *ngFor="let page of pages"><a routerLink={{page.slug}}>{{ page.title }}</a></li>
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
