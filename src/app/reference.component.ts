import { Component } from '@angular/core';

import { ReferenceService } from './reference.service';

@Component({
  selector: 'reference',
  template: `
  <ul>
    <li *ngFor="let page of referencePages">{{page}}</li>
  </ul>
  `,
  providers: [ ReferenceService ]
})
export class ReferenceComponent {
	referencePages: Array<any>;
	
	constructor( referenceService: ReferenceService ) {
		this.referencePages = referenceService.getReferencePages()
	}
}
