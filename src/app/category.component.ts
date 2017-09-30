import { Component, OnInit, HostBinding } from '@angular/core';
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
        <h3>{{ category?.name }}SUPER DOPE TITLE</h3>
        <ul>
            <li *ngFor="let page of pages"><a routerLink='/page/{{page.id}}' [innerHtml]="page.title.rendered"></a></li>
        </ul>
      </section>
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
export class CategoryComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';

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
        this.route.paramMap
            .switchMap( (params: ParamMap) =>
                this.contentService.getPagesForCategory(+params.get('id'))
            ).subscribe((pages: Page[]) => this.pages = pages);
    }
}
