import { Component, HostBinding } from '@angular/core';

import { Page } from './page';
import { ContentService } from './content.service';
import { slideAnimation } from './animations';

@Component({
  animations: [ slideAnimation ],
  selector: 'narrative',
  template: `
  <ul>
    <li *ngFor="let page of pages"><a routerLink={{page.id}} [innerHtml]="page.title.rendered"></a></li>
  </ul>
  `,
  providers: [ ContentService ]
})
export class NarrativeComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'absolute';

	pages: Array<Page>;

	constructor( contentService:ContentService ) {
		contentService.getNarrativePages().then(pages => this.pages = pages);
	}
}
