import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { EpisodeComponent } from './episode.component';
import { CharactersComponent } from './characters.component';
import { SupplementalComponent } from './supplemental.component';
import { ReferenceComponent } from './reference.component';

const appRoutes = [
  { path: 'episodes', component: EpisodeComponent },
  { path: 'characters', component: CharactersComponent },
  // { path: 'characters/:id', component: CharactersComponent },
  { path: 'supplemental', component: SupplementalComponent },
  { path: 'reference', component: ReferenceComponent }
  // { path: '', component: LandingComponent },
  // { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent, EpisodeComponent, CharactersComponent, SupplementalComponent, ReferenceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
