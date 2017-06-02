import { Component, HostBinding } from '@angular/core';

import { ReferenceService } from './reference.service';
import { slideAnimation } from './animations';

@Component({
  animations: [ slideAnimation ],
  selector: 'reference',
  template: `
  <ul>
    <li *ngFor="let page of referencePages"><a routerLink={{page.slug}}>{{page.title}}</a></li>
  </ul>
  `,
  providers: [ ReferenceService ]
})
export class ReferenceComponent {
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'aboslute';

	referencePages: Array<any>;
	
	constructor( referenceService: ReferenceService ) {
		this.referencePages = referenceService.getReferencePages()
	}
}
