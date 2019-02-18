import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
// Animation API support is still evolving (http://caniuse.com/#feat=web-animation)
// Polyfill web-animations.min.js is recommended
import { animate, style, transition, trigger } from '@angular/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

import { CustomRequestOptions } from './customrequest.options';
import { AppComponent }  from './app.component';
import { EpisodeComponent } from './episode.component';
import { CharactersComponent } from './characters.component';
import { CategoryComponent } from './category.component';
import { CategoryPagesComponent } from './category-pages.component';
import { CategorySubcategoriesComponent } from './category-subcategories.component';
import { PageComponent } from './page.component';
import { ReferenceComponent } from './reference.component'; // change to PageComp
import { ReferencePage } from './reference-page.component';
import { LandingComponent } from './landing.component';
import { SynopsisComponent } from './synopsis.component';
import { environment } from './environment';
import { ContentService } from './content.service';

const appRoutes: Routes = [
  { path: 'episodes', component: EpisodeComponent },
  // show index for /category/x, /narrative, /reference
  // x = category x?
  // show page for /post/x
  // post x = category/subcategory/x?
  // category/narrative
  { path: 'category/:id/:name', component: CategoryPagesComponent }, // show pages for subcategory
  { path: 'page/:id/:name', component: PageComponent, data: {animation: 'Page'} }, // re-assign to Page component
  { path: 'characters', component: CharactersComponent },
  // { path: 'characters/:id', component: CharactersComponent },
  { path: 'narrative', component: CategorySubcategoriesComponent, data: [{categoryId: 1}] },
  // { path: 'narrative', redirectTo: 'category/'+environment.narrativeCategory }, // deprecate in favor of category/1
  { path: 'narrative/:id', component: PageComponent, data: {animation: 'Page'} }, // page/:id
  // { path: 'reference', component: ReferenceComponent }, // category/2
  { path: 'reference', component: CategorySubcategoriesComponent, data: [{categoryId: 2}] },
  { path: 'reference/:id', component: ReferencePage, data: {animaton: 'Page'} }, // page/:id
  // { path: 'synopsis', component: PageComponent }, // and pass in page id (as param or data?)
  { path: 'synopsis', component: SynopsisComponent },
  { path: 'home', component: LandingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}), // for debugging
    HttpClientModule,
    FormsModule
  ],
  declarations: [ AppComponent, EpisodeComponent, PageComponent, CategoryComponent, CategorySubcategoriesComponent, CategoryPagesComponent, CharactersComponent, ReferenceComponent, ReferencePage, LandingComponent, SynopsisComponent ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: CustomRequestOptions, multi: true },
    ContentService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
