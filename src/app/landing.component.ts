import { Component } from '@angular/core';

import { NarrativeService } from './narrative.service';
import { ReferenceService } from './reference.service';

@Component({
  selector: 'landing',
  templateUrl: './templates/landing.html',
  providers: [ NarrativeService, ReferenceService ]
})
export class LandingComponent {
  // these values are changed inline in the template by event listeners on the buttons
  // which triggers ngClass to add classes to the respective elements
  episodesVisible: false;
  rootLinksVisible: false;
  narrativePages: Array<any>;
  referencePages: Array<any>;
  
  // get pages onInit rather than in constructor
  constructor( narrativeService:NarrativeService, referenceService:ReferenceService ) {
    narrativeService.getNarrativePages().then(returnedPages => this.narrativePages = returnedPages);
    referenceService.getReferencePages().then(returnedPages => this.referencePages = returnedPages);
  }
}
