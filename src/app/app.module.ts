import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { EpisodeComponent } from './episode.component';
import { CharactersComponent } from './characters.component';
import { NarrativeComponent } from './narrative.component';
import { NarrativePage } from './narrative-page.component';
import { ReferenceComponent } from './reference.component';
import { ReferencePage } from './reference-page.component';
import { LandingComponent } from './landing.component';

const appRoutes: Routes = [
  { path: 'episodes', component: EpisodeComponent },
  { path: 'characters', component: CharactersComponent },
  // { path: 'characters/:id', component: CharactersComponent },
  { path: 'narrative', component: NarrativeComponent },
  { path: 'narrative/:id', component: NarrativePage },
  { path: 'reference', component: ReferenceComponent },
  { path: 'reference/:id', component: ReferencePage },
  { path: 'home', component: LandingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent, EpisodeComponent, CharactersComponent, NarrativeComponent, NarrativePage, ReferenceComponent, ReferencePage, LandingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
