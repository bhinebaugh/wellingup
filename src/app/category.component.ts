import { Component } from '@angular/core';
import { Category } from './category';
import { Page } from './page';
import { ContentService } from './content.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    template: `
        <h1>{{ category.name }}</h1>
        <ul>
            <li *ngFor="let page of subcategories"><a routerLink='/post/{{page.id}}' [innerHtml]="page.title.rendered"></a></li>
        </ul>
    `,
    providers: [ ContentService ]
})
export class CategoryComponent {
    subcategories : Array<Page>;
    category : Category;

    constructor(
        private contentService : ContentService,
        private route : ActivatedRoute
    ){
        let id = +this.route.snapshot.params['id'];
        contentService.getPagesForCategory(id).then(returnedCats => {
            this.subcategories = returnedCats;
            console.log('got categories', returnedCats)
        });
        // get Category name, and breadcrumb also
        this.contentService.getCategory(id).then(returnedCat => 
        {this.category = returnedCat; console.log('got category', returnedCat)})
    }

    ngOnInit(): void {

    }
}