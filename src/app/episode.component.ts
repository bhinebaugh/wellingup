import { Component, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { ActiveState } from './active-state.service'
import { EpisodesService } from './episodes.service';
import { slideAnimation } from './animations';

@Component({
  animations: [ slideAnimation ],
  selector: 'episodes',
  styleUrls: ['episode.component.css'],
  template: `
  <div class="wrapper">
    <div class="go-back-wrapper">
      <a class="go-back" (click)="goBack()">&larr; back</a>
    </div>
    <div class="episodes-wrapper">
      <article class="episode" *ngFor="let episode of episodes">
        <div class="body">
          <img class="episode-thumbnail" src="{{episode.image}}">
          <section class="episode-description">
            <h3>{{episode.name}}</h3>
            <p class="blurb">{{episode.description}}</p>
            <button class="play-episode" (click)="changeEpisode(episode.id-1)">Play Episode</button>
          </section>
        </div>
        <footer>
          <h3>Related</h3>
          <ul>
            <li *ngFor="let link of episode.links" routerLink="{{link.url}}" routerLinkActive="active"><a class="supplemental">{{link.title}}</a></li>
          </ul>
        </footer>
      </article>
    </div>
  </div>
  <footer class="episodes-footer">
    <div class="footer-links">
      <a href="https://www.facebook.com/wellingupbook/">Facebook</a>
      <a>Contact</a>
    </div>
  </footer>
  `
})
export class EpisodeComponent {
  audioPlayerVisibleAsync : Observable<boolean>;
  episodes : Array<any>;
  links : Array<any>;

  constructor(
    private episodesService: EpisodesService,
    private location: Location,
    private state: ActiveState
  ){
    this.audioPlayerVisibleAsync = this.state.audioPlayerVisible$;
    this.episodes = episodesService.getEpisodes();
  }

  goBack(): void {
    this.location.back();
  }
  changeEpisode(id : number): void{
    this.state.makeAudioPlayerVisible();
    this.state.changeEpisode(id);
    // this.state.currentEpisode = id;
    // console.log(this.episodes);
    // console.log(this.state.currentEpisode);
    // console.log(this.episodes[this.state.currentEpisode - 1].audio);
  }
}
