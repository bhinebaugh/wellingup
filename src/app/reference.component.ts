import { Component, HostBinding } from '@angular/core';

import { Page } from './page';
import { ReferenceService } from './reference.service';
import { slideAnimation } from './animations';

@Component({
  animations: [ slideAnimation ],
  selector: 'reference',
  template: `
  <ul>
    <li *ngFor="let page of referencePages"><a routerLink={{page.id}}>{{page.title.rendered}}</a></li>
  </ul>
  `,
  providers: [ ReferenceService ]
})
export class ReferenceComponent {
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'absolute';

	referencePages: Array<Page>;
	
	constructor( referenceService: ReferenceService ) {
		referenceService.getReferencePages().then(pages => this.referencePages = pages)
	}
}
