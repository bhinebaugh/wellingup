import { Component, OnInit, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Category } from './category';
import { Page } from './page';
import { ContentService } from './content.service';
import { slideAnimation, pageTurn, pageBack } from './animations';

@Component({
    animations: [ pageBack ],
    template: `
    <div class="wrapper">
      <section>
        <a class="go-back" (click)="goBack()">&larr; back</a>
        <h3>Subcategories of {{ category?.name }}</h3>
        <ul>
            <li *ngFor="let subcategory of subcategories"><a routerLink='/category/{{subcategory.id}}' [innerHtml]="subcategory.name"></a></li>
        </ul>
      </section>
    </div>
    `,
    providers: [ ContentService ]
})
export class CategorySubcategoriesComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';

    subcategories : Array<Category>;
    category : Category;
    categoryId : number;

    constructor(
        private contentService : ContentService,
        private route : ActivatedRoute,
        private location : Location
    ){
        // let id = +this.route.snapshot.params['id'];
        // contentService.getPagesForCategory(id).then(returnedPages => this.pages = returnedPages );
        // get Category name, and breadcrumb also
        // this.contentService.getCategory(id).then(returnedCat => this.category = returnedCat)
        // pull value from route metadata
        this.categoryId = route.snapshot.data[0]['categoryId'];
    }

    ngOnInit(): void {
        // this.route.paramMap
        //     .switchMap( (params: ParamMap) =>
        //         this.contentService.getSubcategoriesForCategory(this.categoryId)
        //     ).subscribe((subcategories: Category[]) => this.subcategories = subcategories);
        this.contentService.getSubcategoriesForCategory(this.categoryId)
        // .subscribe( subcategories => this.subcategories = subcategories ); // for stream
        .subscribe( subcategories => { // sort according to alphabetical order of description field
            this.subcategories = subcategories.sort( (a,b) => {
                    if(a['description'][0] < b['description'][0]){
                        return -1;
                    }else if(a['description'][0] > b['description'][0]){
                        return 1;
                    }
                    return 0;
                });
        })
        // .then( cats => this.subcategories = cats ) // for promise

        this.contentService.getCategory(this.categoryId)
        .then( cat => this.category = cat );
    }

    goBack(): void {
		this.location.back();
	}
}
