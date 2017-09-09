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
	  <li *ngFor="let episode of episodes">
      <h4>{{episode.name}}</h4>
      <audio controls="controls">
        <!-- source src="{{episode.audio}}.webm" -->
        <!-- source src="{{episode.audio}}.mp4" -->
        <source src="{{episode.audio}}.ogg" type="audio/ogg">
        <source src="{{episode.audio}}.mp3" type="audio/mpeg">
        <p>If you have trouble with embedded audio, you might want to <a href="{{episode.audio}}.mp3">download this episode</a> instead</p>
      </audio>
    </li>
  </ul>
  `,
  providers: [ EpisodesService ]
})
export class EpisodeComponent {
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'absolute';

  episodes: Array<any>;

  constructor( episodesService: EpisodesService ){
    this.episodes = episodesService.getEpisodes();
  }
}
