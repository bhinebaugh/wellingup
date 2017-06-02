import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ReferenceService } from './reference.service';
import { slideAnimation } from './animations';

@Component({
	animations: [ slideAnimation ],
	template: `
    <div class="page">
        <h3>{{page.title}}</h3>
        <div [innerHtml]="page.content"></div>
    </div>
	`,
    styles: ['.page { margin: 0 10%; }'],
	providers: [ ReferenceService ]
})


export class ReferencePage implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'aboslute';

	page: Object;

	constructor(
		private referenceService:ReferenceService,
		private route:ActivatedRoute
	) {}
	
	ngOnInit(): void {
		//let id = this.route.params['id'];
		//this.page = this.referenceService.getReferencePage(id);
		this.route.params
		.switchMap((params:Params) => this.referenceService.getReferencePage(+params['id']))
		.subscribe(page => this.page = page)
	}
}
