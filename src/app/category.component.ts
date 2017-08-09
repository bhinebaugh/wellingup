import { Component, OnInit, HostBinding } from '@angular/core';
import { Category } from './category';
import { Page } from './page';
import { ContentService } from './content.service';
import { ActivatedRoute, Params } from '@angular/router';
import { slideAnimation } from './animations';

@Component({
    animations: [ slideAnimation ],
    template: `
<<<<<<< HEAD
    <div class="wrapper">
        <h3>{{ category.name }}</h3>
=======
        <h1>{{ category?.name }}</h1>
>>>>>>> 62ad45005e57aa21fae4eea914baa6fb494b8206
        <ul>
            <li *ngFor="let page of pages"><a routerLink='/page/{{page.id}}' [innerHtml]="page.title.rendered"></a></li>
        </ul>
    </div>
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
        let id = +this.route.snapshot.params['id'];
        contentService.getPagesForCategory(id).then(returnedPages => this.pages = returnedPages );
        // get Category name, and breadcrumb also
<<<<<<< HEAD
        this.contentService.getCategory(id).then(returnedCat =>
        {this.category = returnedCat; console.log('got category', returnedCat)})
=======
        this.contentService.getCategory(id).then(returnedCat => this.category = returnedCat)
>>>>>>> 62ad45005e57aa21fae4eea914baa6fb494b8206
    }

    ngOnInit(): void {

    }
}
