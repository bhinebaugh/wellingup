import { Component, OnInit, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

import { Category } from './category';
import { Page } from './page';
import { ContentService } from './content.service';
import { slideAnimation, pageTurn, pageBack } from './animations';

@Component({
    animations: [ pageBack ],
    template: `
    <div class="wrapper">
      <section class="page">
        <a class="go-back" (click)="goBack()">&larr; back</a>
        <h1>{{ category?.name }} Pages</h1>
        <div class="subcategories">
          <page-list [category]="subcategory" *ngFor="let subcategory of subcategories"></page-list>
        </div>
      </section>
    </div>
    <footer>
      <div class="footer-links">
        <a href="https://www.facebook.com/wellingupbook/">Facebook</a>
        <a>Contact</a>
      </div>
    </footer>
    `,
    styles: [`
      h1 {
        text-align: center;
        color: #60686a;
        padding: 0 0 1em;
      }
      .subcategories {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `],
    providers: [ ContentService ]
})
export class CategorySubcategoriesComponent implements OnInit {

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
        .subscribe( resp => {
            this.subcategories = resp
        })
            
            // subcategories => { // sort according to alphabetical order of description field
            // this.subcategories = subcategories.sort( (a : Category, b : Category) => {
            //         if(a['description'][0] < b['description'][0]){
            //             return -1;
            //         }else if(a['description'][0] > b['description'][0]){
            //             return 1;
            //         }
            //         return 0;
            //     });
        // })
        // .then( cats => this.subcategories = cats ) // for promise

        this.contentService.getCategory(this.categoryId)
        .subscribe( resp => {
            this.category = resp
        })
        // .then( cat => this.category = cat );
    }

    goBack(): void {
		this.location.back();
	}
}
