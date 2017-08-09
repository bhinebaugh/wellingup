//import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Page } from './page';
import { ContentService } from './content.service';
import { slideAnimation } from './animations';

@Component({
	animations: [ slideAnimation ],
    // need '?' to check if promise has resolved and initialized var
	template: `
    <div class="page">
        <h3 [innerHtml]="referencePage?.title.rendered"></h3>
        <div [innerHtml]="referencePage?.content.rendered"></div>
    </div>
	`,
    styles: ['.page { margin: 0 10%; }'],
	providers: [ ContentService ]
})


export class ReferencePage implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'absolute';

	referencePage: Page;

	constructor(
		private contentService:ContentService,
		private route:ActivatedRoute
	) {}
	
	ngOnInit(): void {
        // params is an Observable...
		// if we decide to implement linking directly to a sibling (e.g. backstory) page,
        // the router will re-use the component, and we'll need to use something 
        // like switchMap make sure the component contents get updated properly:
		// this.route.params
		// .switchMap((params:Params) => this.contentService.getReferencePage(+params['id']))
		// .subscribe(page => this.page = page)
        let id = +this.route.snapshot.params['id']; //'+' coerces the string into a number
		this.contentService.getReferencePage(id).then(resolvedPage => this.referencePage = resolvedPage);
	}
}
