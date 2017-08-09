import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Category } from './category';
import { Page } from './page';
import { ContentService } from './content.service';
import { slideAnimation } from './animations';

@Component({
    animations: [ slideAnimation ],
    template: `
        <h1>{{ category?.name }}</h1>
        <ul>
            <li *ngFor="let page of pages"><a routerLink='/page/{{page.id}}' [innerHtml]="page.title.rendered"></a></li>
        </ul>
    `,
    providers: [ ContentService ]
})
export class CategoryComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'aboslute';

    pages : Array<Page>;
    category : Category;

    constructor(
        private contentService : ContentService,
        private route : ActivatedRoute
    ){
        // let id = +this.route.snapshot.params['id'];
        // contentService.getPagesForCategory(id).then(returnedPages => this.pages = returnedPages );
        // get Category name, and breadcrumb also
        // this.contentService.getCategory(id).then(returnedCat => this.category = returnedCat)
    }

    ngOnInit(): void {
        // no errors but never assigns this.pages
        // this.route.paramMap.map(
        //     (params : ParamMap) => {
        //         console.log('route params changed');
        //         this.contentService.getPagesForCategory(+params.get('id'))
        //         .then( (returnedPages: Page[]) => this.pages = returnedPages)
        //     }
        // );
        
        // maybe? diff between params and paramMap? abandoning.
        // this.route.params.map(
        //     params => this.contentService.getPagesForCategory(1)
        // )

        // hewing close to tutorial
        // need to add a method to service that returns an Observable
        // this.route.paramMap.switchMap(
        //     (params : ParamMap) => this.contentService.getNarrativePages$()
        // )
    }
}