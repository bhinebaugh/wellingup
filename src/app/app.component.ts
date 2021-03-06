import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterOutlet } from '@angular/router';
import { ActiveState } from './active-state.service';
import { EpisodesService } from './episodes.service';
import { Episode } from './episode';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from './environment';
import { slideAnimation } from './animations';

@Component({
  selector: 'my-app',
  providers: [
    ActiveState,
    EpisodesService
  ],
  animations: [ slideAnimation ],
  template: `
    <div class="episode-mini"
        [class.shown]="(audioPlayerVisibleAsync | async)"
        [hidden]="!(audioPlayerVisibleAsync | async)"
        [class.bottom]="onFrontPage"
    >

        <h5>{{(currentEpisodeAsync | async)?.name}}
        <button class="play-episode player-toggle" (click)="this.state.hideAudioPlayer()">X</button></h5>
        <audio controls="controls" src="{{(currentEpisodeAsync | async)?.audio}}">
          <source src="{{(currentEpisodeAsync | async)?.audio}}" type="audio/mpeg">
          <!--<source src="{{this.episodes[this.state.currentEpisode$ | async].audio}}" type="audio/mpeg">
          <source src="audio/welling-up-patricia-wild-1.mp4">
          <source src="audio/welling-up-patricia-wild-1.mp3">
          <source src="audio/welling-up-patricia-wild-1.wav">-->
        </audio>
        <p><a routerLink="/episodes">browse episodes...</a></p>
      </div>
      <div class="player-revealer"
        [hidden]="(audioPlayerVisibleAsync | async) || this.state.audioPlayer === false"
        [class.shown]="!(audioPlayerVisibleAsync | async) && this.state.audioPlayer === true"
      >
        <button class="player-toggle" (click)="this.state.makeAudioPlayerVisible()"><img src="images/goodCaret.png" class="caret"></button>
      </div>
    <header [class.no-border]="onFrontPage">
    <div 
      class="title-subtitle" 
      routerLinkActive="floating"
      [ngClass]="{'transition': this.state.painting}"
    >
      <h1><a routerLink="/home">Welling Up</a></h1>
      <h2>a love story</h2>
    </div>
      <nav [hidden]="onFrontPage">
        <a routerLinkActive="current" routerLink="/home">home</a>
        <a routerLinkActive="current" routerLink="/episodes">episodes</a>
        <a routerLinkActive="current" routerLink="/synopsis">synopsis</a>
        <a routerLinkActive="current" routerLink="/narrative">supplemental story</a>
        <a routerLinkActive="current" routerLink="/reference">reference material</a>
      </nav>
    </header>

    <div class="animation-wrapper" [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>

  `
})
export class AppComponent implements OnInit {
  onFrontPage : boolean;
  audioPlayerVisibleAsync : Observable<boolean>;
  audioPlayerMaximizedAsync : Observable<boolean>;
  currentEpisodeAsync : Observable<Episode>;
  narrativeUrl : string;
  referenceUrl : string;
  episodes : number[];
  whenNavEnds : Observable<Event>;

  constructor(
    public state: ActiveState,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private episodesService: EpisodesService
  ){
    this.episodes = episodesService.getEpisodes();
    this.router.events
    .pipe( // RxJs 6 requirement
      filter(e => e instanceof NavigationEnd)
    )
    .subscribe(
      () => {
        window.scrollTo(0, 0);
        this.onFrontPage = this.router.isActive('home', false)
      }
    );
  }

  ngOnInit(): void {
    this.audioPlayerVisibleAsync = this.state.audioPlayerVisible$;
    this.audioPlayerMaximizedAsync = this.state.audioPlayerMaximized$;
    this.currentEpisodeAsync = this.state.currentEpisode$;
    this.narrativeUrl = "/category/"+environment.narrativeCategory;
    this.referenceUrl = "/category/"+environment.referenceCategory;
  }

  // detect route change
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }



}
