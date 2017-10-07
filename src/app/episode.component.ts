import { Component, HostBinding } from '@angular/core';
import { Location } from '@angular/common';

import { ActiveState } from './active-state.service'
import { EpisodesService } from './episodes.service';
import { slideAnimation } from './animations';

@Component({
  animations: [ slideAnimation ],
  providers: [ ActiveState ],
  selector: 'episodes',
  styles: [`
  `],
  template: `
  <div class="wrapper">
    <div class="go-back-wrapper">
      <a class="go-back" (click)="goBack()">&larr; back</a>
    </div>
    <section *ngFor="let episode of episodes">
      <h3>{{episode.name}}</h3>
      <img class="episode-thumbnail" src="{{episode.image}}">
      <div class="text-elements">
      <audio controls="controls">
      <source src="{{episode.audio}}" type="audio/ogg">
      <source src="{{episode.audio}}" type="audio/mpeg">
      <p>If you have trouble with embedded audio, you might want to <a href="{{episode.audio}}.mp3">download this episode</a> instead</p>
      </audio>
      <button class="play-episode" (click)="changeEpisode()">Play Episode</button>
        <p class="blurb">{{episode.description}}</p>
        <a class="supplemental">Some Relevant Stuff</a>
        <a class="supplemental">Some Relevant Stuff</a>
      </div>
    </section>
  </div>
  <footer>
  <div class="left-links">
    <a>Facebook</a>
    <a>Twitter</a>
  </div>
  <div class="right-links">
    <a>Legal</a>
    <a>Contact</a>
  </div>
  </footer>
  `,
  providers: [ EpisodesService ]
})
export class EpisodeComponent {
	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('style.display')   display = 'block';
	@HostBinding('style.position')  position = 'absolute';

  episodes: Array<any>;

  constructor(
    private episodesService: EpisodesService,
    private location: Location,
    private state: ActiveState
  ){
    this.episodes = episodesService.getEpisodes();
  }

  goBack(): void {
    this.location.back();
  }
  changeEpisode(): void{
    this.state.makeAudioPlayerVisible();
    console.log(this.episodes);
  }
}
