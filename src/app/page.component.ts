import { Component, OnInit, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Comment } from './comment';
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
		<div [hidden]="displayForm">
			<button (click)="showForm()">add comment</button>
		</div>
		<div [hidden]="!displayForm">
			<h6>Leave a comment</h6>
			<form (ngSubmit)="submitComment()">
				<label for="name">Name</label>
				<input [(ngModel)]="comment.author_name" name="name" id="name" type="text">
				<br/>
				<label for="email">Email address</label>
				<input [(ngModel)]="comment.author_email" name="email" id="email" type="email">
				<br/>
				<label for="content">Your comment</label>
				<textarea [(ngModel)]="comment.content" name="content" id="content" placeholder="your comment"></textarea>
				<button>post</button>
			</form>
		</div>
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

	id: number;
	page: Page;
	comments: Array<object>;
	comment: Comment;

	displayForm: boolean;

	constructor(
		private contentService:ContentService,
		private route:ActivatedRoute,
		private location:Location
	) {}

	ngOnInit(): void {
		this.id = +this.route.snapshot.params['id'];
		this.comment = new Comment(
			'',
			'',
			'',
			this.id
		);
		this.contentService.getPage(this.id).then(resolvedPage => this.page = resolvedPage)
		this.contentService.getCommentsForPage(this.id)
		.then(resolvedComments => this.comments = resolvedComments)
	}

	goBack(): void {
		this.location.back();
	}
	showForm(): void {
		this.displayForm = true;
	}

	submitComment(): void {
		// send POST request to API
		this.contentService.postComment(this.comment)
		this.displayForm = false;
	}

}
