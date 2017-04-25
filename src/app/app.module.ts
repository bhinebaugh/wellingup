import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EpisodeComponent } from './episode.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, EpisodeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
