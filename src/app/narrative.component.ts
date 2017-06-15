import { Component, HostBinding } from '@angular/core';

import { Page } from './page';
import { NarrativeService } from './narrative.service';
import { slideAnimation } from './animations';

@Component({
  animations: [ slideAnimation ],
  selector: 'narrative',
  template: `
  <ul>
    <li *ngFor="let page of pages"><a routerLink={{page.id}}>{{ page.title.rendered }}</a></li>
  </ul>
  `,
  providers: [ NarrativeService ]
})
export class NarrativeComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'absolute';

	pages: Array<Page>;

	constructor( narrativeService:NarrativeService ) {
		narrativeService.getNarrativePages().then(pages => this.pages = pages);
	}
}
