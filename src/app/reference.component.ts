import { Component, HostBinding } from '@angular/core';

import { Page } from './page';
import { ContentService } from './content.service';
import { slideAnimation } from './animations';

@Component({
  animations: [ slideAnimation ],
  selector: 'reference',
  template: `
  <ul>
    <li *ngFor="let page of referencePages"><a routerLink={{page.id}} [innerHtml]="page.title.rendered"></a></li>
  </ul>
  `,
  providers: [ ContentService ]
})
export class ReferenceComponent {
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'absolute';

	referencePages: Array<Page>;
	
	constructor( contentService: ContentService ) {
		contentService.getReferencePages().subscribe(pages => this.referencePages = pages)
	}
}
