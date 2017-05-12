import { Component } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './templates/landing.html'
})
export class LandingComponent {
  // these values are changed inline by event listeners on the button
  // which triggers ngClas to add classes to the respective elements
  episodesVisible: false;
  rootLinksVisible: false;
}
