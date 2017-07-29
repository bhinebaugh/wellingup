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
  // these values are changed inline in the template by event listeners on the buttons
  // which triggers ngClass to add classes to the respective elements
  // episodesVisible: boolean = false;
  // rootLinksVisible: boolean;// = false;
  rootLinksVisibleAsync : Observable<boolean>;
  narrativePages: Array<any>;
  referencePages: Array<any>;
  subscribedRootsVis : boolean;
  
  // get pages onInit rather than in constructor
  constructor(
    narrativeService:NarrativeService,
    referenceService:ReferenceService,
    private state:ActiveState // is supposed to share with app.component's instance of this service
  ) {
    narrativeService.getNarrativePages().then(returnedPages => this.narrativePages = returnedPages);
    referenceService.getReferencePages().then(returnedPages => this.referencePages = returnedPages);
    this.rootLinksVisibleAsync = this.state.rootLinksVisible$
    this.state.rootLinksVisible$.subscribe(valu => {
      this.subscribedRootsVis = valu;
      console.log('rootLinksVisible$ subscribed, and (subscribedRootsVis) currently:',valu)
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit for landing component');
    this.rootLinksVisibleAsync = this.state.rootLinksVisible$;
    // this.rootLinksVisible = this.state.getRootLinksVisibility();
    // console.log('root links locally in component (init):', this.rootLinksVisible)
  }

  showRootLinks() {
    this.state.makeRootLinksVisible();
  }
}
