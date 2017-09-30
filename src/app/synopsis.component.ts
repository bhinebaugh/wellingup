import { Component, HostBinding } from '@angular/core';
import { Location } from '@angular/common';

import { Page } from './page';
import { environment } from './environment';
import { ContentService } from './content.service';
import { pageTurn } from './animations';

@Component({
    animations: [ pageTurn ],
    template: `
	<div class="page">
		<a class="go-back" (click)="goBack()">&larr; back</a>
		<h3 [innerHtml]="page?.title.rendered"></h3>
		<div [innerHtml]="page?.content.rendered"></div>
        <hr/>
        <h4>Start exploring</h4>
        <p>To get into the main narrative, <a routerLink="/episodes">listen to the episodes</a><p>
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
    providers: [ ContentService ]
})
export class SynopsisComponent {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';

    page: Page;

    constructor(
        private contentService:ContentService,
        private location:Location
    ) {}

    ngOnInit(): void {
        this.contentService.getPage(environment.synopsisId)
        .then( page => this.page = page );
    }

    goBack(): void {
        this.location.back();
    }
}