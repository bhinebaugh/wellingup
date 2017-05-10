import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { EpisodeComponent } from './episode.component';
import { CharactersComponent } from './characters.component';
import { SupplementalComponent } from './supplemental.component';
import { ReferenceComponent } from './reference.component';
import { LandingComponent } from './landing.component';

const appRoutes: Routes = [
  { path: 'episodes', component: EpisodeComponent },
  { path: 'characters', component: CharactersComponent },
  // { path: 'characters/:id', component: CharactersComponent },
  { path: 'supplemental', component: SupplementalComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'home', component: LandingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent, EpisodeComponent, CharactersComponent, SupplementalComponent, ReferenceComponent, LandingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
