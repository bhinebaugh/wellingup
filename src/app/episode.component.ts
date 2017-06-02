import { Component, HostBinding } from '@angular/core';

import { EpisodesService } from './episodes.service';
import { slideAnimation } from './animations';

@Component({
  animations: [ slideAnimation ],
  selector: 'episodes',
  styles: [`
  div { background: #f2f2f2 }
  `],
  template: `
  <ul>
	  <li *ngFor="let episode of episodes">episode: {{episode.name}}</li>
  </ul>
  `,
  providers: [ EpisodesService ]
})
export class EpisodeComponent {
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'aboslute';

  episodes: Array<any>;

  constructor( episodesService: EpisodesService ){
    this.episodes = episodesService.getEpisodes();
  }
}
