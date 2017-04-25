import { Component } from '@angular/core';
import { EpisodeComponent } from './episode.component'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><episodes></episodes>`
})
export class AppComponent  { name = 'Angular'; }
