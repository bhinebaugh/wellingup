//import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Page } from './page';
import { NarrativeService } from './narrative.service';
import { slideAnimation } from './animations';

@Component({
	animations: [ slideAnimation ],
	template: `
	<div class="page">
		<h3 [innerHtml]="page?.title.rendered"></h3>
		<div [innerHtml]="page?.content.rendered"></div>
	</div>
	`,
	styles: ['.page { margin: 0 10%; }'],
	providers: [ NarrativeService ]
})


export class NarrativePage implements OnInit {
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'absolute';

	page: Page;

	constructor(
		private narrativeService:NarrativeService,
		private route:ActivatedRoute
	) {}
	
	ngOnInit(): void {
		let id = +this.route.snapshot.params['id'];
		this.narrativeService.getNarrativePage(id).then(resolvedPage => this.page = resolvedPage)
	}
}
