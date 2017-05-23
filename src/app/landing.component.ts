import { Component } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './templates/landing.html'
})
export class LandingComponent {
  // these values are changed inline in the template by event listeners on the buttons
  // which triggers ngClass to add classes to the respective elements
  episodesVisible: false;
  rootLinksVisible: false;
}
