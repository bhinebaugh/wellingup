import { Component, OnInit, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

import { Category } from './category';
import { Page } from './page';
import { ContentService } from './content.service';
import { switchMap } from 'rxjs/operators';
import { slideAnimation, pageTurn, pageBack } from './animations';

@Component({
    animations: [ pageBack ],
    template: `
    <div class="wrapper">
      <section class="page">
        <a class="go-back" (click)="goBack()">&larr; back</a>
        <h3>{{ category?.name }}</h3>
        <ul>
            <li *ngFor="let page of pages"><a routerLink='/page/{{page.id}}/{{page.title.rendered}}' [innerHtml]="page.title.rendered"></a></li>
        </ul>
      </section>
    </div>
    <footer>
      <div class="footer-links">
        <a href="https://www.facebook.com/wellingupbook/">Facebook</a>
        <a>Contact</a>
      </div>
    </footer>
    `,
    providers: [ ContentService ]
})
export class CategoryPagesComponent implements OnInit {

    pages : Array<Page>;
    category : Category;

    constructor(
        private contentService : ContentService,
        private route : ActivatedRoute,
        private location : Location
    ){
        // let id = +this.route.snapshot.params['id'];
        // contentService.getPagesForCategory(id).then(returnedPages => this.pages = returnedPages );
        // get Category name, and breadcrumb also
        // this.contentService.getCategory(id).then(returnedCat => this.category = returnedCat)
    }

    ngOnInit(): void {
        this.route.paramMap
            .pipe(
                switchMap( (params: ParamMap) => this.contentService.getPagesForCategory(+params.get('id')) )
            )
            .subscribe((pages: Page[]) => {
                // compare Post objects based on value of first tag they possess
                this.pages = pages.sort( (a,b) => {
                    if(a['tags'][0] < b['tags'][0]){
                        return -1;
                    }else if(a['tags'][0] > b['tags'][0]){
                        return 1;
                    }
                    return 0;
                })
            });

        let id = +this.route.snapshot.params['id'];
        this.contentService.getCategory(id)
        .subscribe( cat => this.category = cat );
    }

    goBack(): void {
		this.location.back();
	}
}
