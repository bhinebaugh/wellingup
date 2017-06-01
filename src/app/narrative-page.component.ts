import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { NarrativeService } from './narrative.service';

@Component({
	selector: 'narrative-page',
	template: `
	<h3>{{page.title}}</h3>
	<div [innerHtml]="page.content"></div>
	`,
	providers: [ NarrativeService ]
})


export class NarrativePage implements OnInit {
	page: Object;

	constructor(
		private narrativeService:NarrativeService,
		private route:ActivatedRoute
	) {}
	
	ngOnInit(): void {
		//let id = this.route.params['id'];
		//this.page = this.narrativeService.getNarrativePage(id);
		this.route.params
		// what is switchMap? it's being weird. returning a slice of a string?
		// oh it's looking for an object to pull a property from and manipulate
		.switchMap((params:Params) => this.narrativeService.getNarrativePage(+params['id']))
		.subscribe(page => this.page = page)
		//this.page = this.narrativeService.getNarrativePage(this.route.params['id'])
	}
}
