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
	<div class="comments">
		<ul *ngFor="let comment of comments">
			<li class="comment">
				<h6>comment by {{comment.author_name}}</h6>
				<div [innerHTML]="comment.content.rendered"></div>
			</li>
		</ul>
	</div>
	<footer>
	<div class="footer-links">
		<a href="https://www.facebook.com/wellingupbook/">Facebook</a>
		<a>Contact</a>
	</div>
	</footer>
	`,
	styles: [`
		.comments ul {
			padding: 0;
		}
		.comments h6 {
			margin: 0;
		}
		.comment {
			background: #f9f9ee;
			border: solid 1px #decccc;
			font-size: 0.8em;
			list-style: none;
			padding: 1em 2em;
		}
	`],
	providers: [ ContentService ]
})


export class PageComponent implements OnInit {
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'absolute';

	page: Page;
	comments: Array<object>;

	constructor(
		private contentService:ContentService,
		private route:ActivatedRoute,
		private location:Location
	) {}

	ngOnInit(): void {
		let id = +this.route.snapshot.params['id'];
		this.contentService.getPage(id).then(resolvedPage => this.page = resolvedPage)
		this.contentService.getCommentsForPage(id)
		.then(resolvedComments => this.comments = resolvedComments)
	}

	goBack(): void {
		this.location.back();
	}

}
