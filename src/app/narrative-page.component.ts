import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { NarrativeService } from './narrative.service';

@Component({
	selector: 'narrative-page',
	template: `
	<div class="page">
		<h3>{{page.title}}</h3>
		<div [innerHtml]="page.content"></div>
	</div>
	`,
	styles: ['.page { margin: 0 10%; }'],
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
		// switchMap is part of the observable ecosystem
		// oh it's looking for an object to pull a property from and manipulate
		.switchMap((params:Params) => this.narrativeService.getNarrativePage(+params['id']))
		.subscribe(page => this.page = page)
		//this.page = this.narrativeService.getNarrativePage(this.route.params['id'])
	}
}
