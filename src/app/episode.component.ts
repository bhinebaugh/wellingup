import { Component, HostBinding } from '@angular/core';

import { EpisodesService } from './episodes.service';
import { slideAnimation } from './animations';

@Component({
  animations: [ slideAnimation ],
  selector: 'episodes',
  styles: [`
  `],
  template: `
  <div class="wrapper">
    <section *ngFor="let episode of episodes">
      <h3>{{episode.name}}</h3>
      <audio controls="controls">
        <source src="{{episode.audio}}.ogg" type="audio/ogg">
        <source src="{{episode.audio}}.mp3" type="audio/mpeg">
        <p>If you have trouble with embedded audio, you might want to <a href="{{episode.audio}}.mp3">download this episode</a> instead</p>
      </audio>
      <p class="blurb">Some really great stuff happens in this episode, you should totally check it out if you're cool. Has science gone too far?</p>
      <img class="episode-thumbnail" src="images/Podcast5.jpeg">
      <a>Some Relevant Stuff</a>
      <a>Some Relevant Stuff</a>
    </section>
  </div>
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
