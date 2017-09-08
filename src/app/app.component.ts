import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ActiveState } from './active-state.service';
import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { environment } from './environment';

@Component({
  selector: 'my-app',
  providers: [ActiveState],
  template: `
    <div class="episode-mini" [class.shown]="(audioPlayerVisibleAsync | async)" [hidden]="!(audioPlayerVisibleAsync | async)">
      <h5>episode 1</h5>
      <audio controls="controls">
        <source src="audio/welling-up-patricia-wild-1.webm">
        <source src="audio/welling-up-patricia-wild-1.mp4">
        <source src="audio/welling-up-patricia-wild-1.mp3">
        <source src="audio/welling-up-patricia-wild-1.wav">
      </audio>
      <p><a routerLink="/episodes">more episodes...</a></p>
    </div>
    <header>
      <nav [hidden]="onFrontPage">
        <a routerLinkActive="current" routerLink="/home">home</a>
        <a routerLinkActive="current" routerLink="/episodes">episodes</a>
        <a routerLinkActive="current" routerLink="/characters">characters</a>
        <a routerLinkActive="current" routerLink={{narrativeUrl}}>supplemental story</a>
        <a routerLinkActive="current" routerLink={{referenceUrl}}>reference material</a>
      </nav>
      <div class="title-subtitle" [class.floating]="onFrontPage">
        <h1>Welling Up</h1>
        <h2>a love story</h2>
      </div>
    </header>

    <div class="animation-wrapper">
      <router-outlet (activate)="newComponentActivated($event)"></router-outlet>
    </div>
  `
})
export class AppComponent implements OnInit {
  onFrontPage : boolean = false;
  audioPlayerVisibleAsync : Observable<boolean>;
  narrativeUrl : string;
  referenceUrl : string;

  constructor(
    private state: ActiveState,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.audioPlayerVisibleAsync = this.state.audioPlayerVisible$;
    this.narrativeUrl = "/category/"+environment.narrativeCategory;
    this.referenceUrl = "/category/"+environment.referenceCategory;
  }

  newComponentActivated(component: Event) {
    this.onFrontPage = ('/home' == this.router.routerState.snapshot.url);
  }

}
