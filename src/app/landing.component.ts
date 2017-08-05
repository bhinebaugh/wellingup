import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NarrativeService } from './narrative.service';
import { ReferenceService } from './reference.service';
import { ActiveState } from './active-state.service';

@Component({
  selector: 'landing',
  templateUrl: './templates/landing.html',
  providers: [ NarrativeService, ReferenceService ]
})
export class LandingComponent {
  // these values (are)were changed inline in the template by event listeners on the buttons
  // which triggers ngClass to add classes to the respective elements
  paintingCrossfade : boolean;
  episodesVisible: boolean;// = false;
  audioPlayerVisibleAsync : Observable<boolean>;
  rootLinksVisible: boolean;// = false;

  narrativePages: Array<any>;
  referencePages: Array<any>;
  subscribedRootsVis : boolean;
  
  // get pages onInit rather than in constructor?
  constructor(
    narrativeService:NarrativeService,
    referenceService:ReferenceService,
    private state:ActiveState // is supposed to share with app.component's instance of this service
  ) {
    narrativeService.getNarrativePages().then(returnedPages => this.narrativePages = returnedPages);
    referenceService.getReferencePages().then(returnedPages => this.referencePages = returnedPages);
  }

  ngOnInit(): void {
    console.log('ngOnInit for landing component');
    this.paintingCrossfade = this.state.painting;
    this.rootLinksVisible = this.state.rootLinks;
    this.audioPlayerVisibleAsync = this.state.audioPlayerVisible$;
  }

  ngAfterContentInit(): void {
    // deactivate the painting crossfade for future init of this component
    this.state.painting = false;
  }

  showAudioPlayer() {
    this.state.makeAudioPlayerVisible();
  }

  showRootLinks() {
    this.rootLinksVisible = this.state.rootLinks = true;
  }
}
