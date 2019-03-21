import { Component, OnInit, Input } from '@angular/core';

import { Category } from './category';
import { Page } from './page';
import { ContentService } from './content.service';

@Component({
    selector: 'page-list',
    template: `
        <div class="category-pages">
            <h2>{{ category?.name }}</h2>
            <ul>
                <li *ngFor="let page of pages"><a routerLink='/page/{{page.id}}/{{page.title.rendered}}' [innerHtml]="page.title.rendered"></a></li>
            </ul>
        </div>
    `,
    styles: [`
        .category-pages {
            padding: 2rem;
            background: #fefdf2;
            margin: 1rem;
            box-shadow: 0px 2px 3px #e5e4ed;
        }
        h2 {
            font-family: "Bilbo Swash Caps";
            font-size: 32px;
            border-bottom: solid 2px #e1e1f5;
            margin: 0;
            padding: 0.2em 1em;
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            list-style-type: disc;
            padding: 0;
            width: auto;
        }
        li {
            color: #c3c3e6; /* bullet tint */
            margin-left: 1em;
        }
        li a {
            text-decoration: none;
        }
    `],
    providers: [ ContentService ]
})
export class PageListComponent implements OnInit {
    pages : Array<Page>;
    @Input() category: Category;

    constructor(
        private contentService : ContentService,
    ){}

    ngOnInit(): void {
        // this.contentService.getCategory()
        // .subscribe( cat => this.category = cat );
        this.contentService.getPagesForCategory(this.category.id)
        .subscribe( pages => this.pages = pages)
    }
}
