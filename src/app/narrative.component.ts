import { Component, HostBinding } from '@angular/core';

import { NarrativeService } from './narrative.service';
import { slideAnimation } from './animations';

@Component({
  animations: [ slideAnimation ],
  selector: 'narrative',
  template: `
  <ul>
    <li *ngFor="let page of pages"><a routerLink={{page.slug}}>{{ page.title }}</a></li>
  </ul>
  `,
  providers: [ NarrativeService ]
})
export class NarrativeComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'aboslute';

	pages: Array<any>;

	constructor( narrativeService:NarrativeService ) {
		this.pages = narrativeService.getNarrativePages();
	}
}
