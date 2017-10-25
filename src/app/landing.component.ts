import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContentService } from './content.service';
import { ActiveState } from './active-state.service';

import { Category } from './category';
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

  narrativeSubcategories: Array<any>;
  referenceSubcategories: Array<any>; //Category[];
  subscribedRootsVis : boolean;
  referenceCategoryUrl: string;
  
  // get pages onInit rather than in constructor?
  constructor(
    private contentService:ContentService,
    private state:ActiveState // is supposed to share with app.component's instance of this service
  ) {}

  ngOnInit(): void {
    this.paintingCrossfade = this.state.painting;
    this.rootLinksVisible = this.state.rootLinks;
    this.audioPlayerVisibleAsync = this.state.audioPlayerVisible$;
    this.contentService.getNarrativeSubcategories().subscribe( data => {
      this.narrativeSubcategories = data.sort( (a,b) => {
                    if(a['description'][0] < b['description'][0]){
                        return -1;
                    }else if(a['description'][0] > b['description'][0]){
                        return 1;
                    }
                    return 0;
                });
    });
    this.contentService.getSubcategoriesForCategory(environment.referenceCategory)
    .subscribe( data => this.referenceSubcategories = data );
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
