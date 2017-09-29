//import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { Page } from './page';
import { ContentService } from './content.service';
import { slideAnimation, pageTurn } from './animations';

@Component({
	animations: [ pageTurn ],
	template: `
	<div class="page">
		<a class="go-back" (click)="goBack()">&larr; back</a>
		<h3 [innerHtml]="page?.title.rendered"></h3>
		<div [innerHtml]="page?.content.rendered"></div>
	</div>
	<footer>
	<div class="left-links">
		<a>Facebook</a>
		<a>Twitter</a>
	</div>
	<div class="right-links">
		<a>Legal</a>
		<a>Contact</a>
	</div>
	</footer>
	`,
	styles: [],
	providers: [ ContentService ]
})


export class PageComponent implements OnInit {
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'absolute';

	page: Page;

	constructor(
		private contentService:ContentService,
		private route:ActivatedRoute,
		private location:Location
	) {}

	ngOnInit(): void {
		let id = +this.route.snapshot.params['id'];
		this.contentService.getPage(id).then(resolvedPage => this.page = resolvedPage)
	}

	goBack(): void {
		this.location.back();
	}

}
