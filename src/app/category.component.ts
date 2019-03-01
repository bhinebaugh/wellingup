import { Component, OnInit, HostBinding } from '@angular/core';
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
      <section>
        <h3>{{ category?.name }}SUPER DOPE TITLE</h3>
        <ul>
            <li *ngFor="let page of pages"><a routerLink='/page/{{page.id}}' [innerHtml]="page.title.rendered"></a></li>
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
export class CategoryComponent implements OnInit {

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
            .pipe(
                switchMap( (params: ParamMap) => this.contentService.getPagesForCategory(+params.get('id')) )
            )
            .subscribe((pages: Page[]) => this.pages = pages);
    }
}
