import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContentService } from './content.service';
import { ActiveState } from './active-state.service';
import { environment } from './environment';

@Component({
  selector: 'landing',
  templateUrl: './templates/landing.html',
  providers: [ ContentService ]
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
  narrativeSubcategories: Array<any>;
  subscribedRootsVis : boolean;
  referenceCategoryUrl: string;
  
  // get pages onInit rather than in constructor?
  constructor(
    private contentService:ContentService,
    private state:ActiveState // is supposed to share with app.component's instance of this service
  ) {
    contentService.getNarrativePages().then(returnedPages => this.narrativePages = returnedPages);
    // in constructor or on init?
    // narrativeService.getNarrativeSubcategories().then(returnedSubcats => this.narrativeSubcategories = returnedSubcats);
    contentService.getReferencePages().then(returnedPages => this.referencePages = returnedPages);
  }

  ngOnInit(): void {
    this.paintingCrossfade = this.state.painting;
    this.rootLinksVisible = this.state.rootLinks;
    this.audioPlayerVisibleAsync = this.state.audioPlayerVisible$;
    this.contentService.getNarrativeSubcategories().subscribe(data => this.narrativeSubcategories = data );
    this.referenceCategoryUrl = '/category/' + environment.referenceCategory.toString();
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
