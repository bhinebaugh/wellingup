import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
// Animation API support is still evolving (http://caniuse.com/#feat=web-animation)
// Polyfill web-animations.min.js is recommended
import { animate, style, transition, trigger } from '@angular/animations';
import { HttpModule, RequestOptions } from '@angular/http';

import { CustomRequestOptions } from './customrequest.options';
import { AppComponent }  from './app.component';
import { EpisodeComponent } from './episode.component';
import { CharactersComponent } from './characters.component';
import { CategoryComponent } from './category.component';
import { PageComponent } from './page.component';
import { ReferenceComponent } from './reference.component'; // change to PageComp
import { ReferencePage } from './reference-page.component';
import { LandingComponent } from './landing.component';
import { environment } from './environment';

const appRoutes: Routes = [
  { path: 'episodes', component: EpisodeComponent },
  // show index for /category/x, /narrative, /reference
  // x = category x?
  // show page for /post/x
  // post x = category/subcategory/x?
  // category/narrative
  { path: 'category/:id', component: CategoryComponent },
  { path: 'page/:id', component: PageComponent }, // re-assign to Page component
  { path: 'characters', component: CharactersComponent },
  // { path: 'characters/:id', component: CharactersComponent },
  // { path: 'narrative', component: CategoryComponent },
  { path: 'narrative', redirectTo: 'category/'+environment.narrativeCategory }, // deprecate in favor of category/1
  { path: 'narrative/:id', component: PageComponent }, // page/:id
  { path: 'reference', component: ReferenceComponent }, // category/2
  { path: 'reference/:id', component: ReferencePage }, // page/:id
  { path: 'home', component: LandingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}), // for debugging
    HttpModule
  ],
  declarations: [ AppComponent, EpisodeComponent, PageComponent, CategoryComponent, CharactersComponent, ReferenceComponent, ReferencePage, LandingComponent ],
  providers: [ { provide: RequestOptions, useClass: CustomRequestOptions } ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
