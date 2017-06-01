import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ReferenceService } from './reference.service';

@Component({
	selector: 'reference-page',
	template: `
	<h3>{{page.title}}</h3>
	<div [innerHtml]="page.content"></div>
	`,
	providers: [ ReferenceService ]
})


export class ReferencePage implements OnInit {
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
