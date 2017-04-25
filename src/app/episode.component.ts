import { Component } from '@angular/core';
import { EpisodesService } from './episodes.service';

@Component({
  selector: 'episodes',
  styles: [`
  div { background: #f2f2f2 }
  `],
  template: `
  <div>episodes are colored {{favoriteColor}}</div>
  <ul>
  <li *ngFor="let episode of episodes">episode: {{episode.name}}</li>
  </ul>
  `,
  providers: [ EpisodesService ]
})
export class EpisodeComponent {
  componentName = 'EpisodeComponent';
  favoriteColor = 'crimson';
  episodes: Array<any>;

  constructor( episodesService: EpisodesService){
    this.episodes = episodesService.getEpisodes();
  }
}
