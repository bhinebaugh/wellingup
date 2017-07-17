import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ActiveState } from './active-state.service';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-app',
  providers: [ActiveState],
  template: `
    <div class="episode-mini">
      <p>episode 1</p>
      <audio controls="controls">
        <source src="audio/welling-up-patricia-wild-1.webm">
        <source src="audio/welling-up-patricia-wild-1.mp4">
        <source src="audio/welling-up-patricia-wild-1.mp3">
        <source src="audio/welling-up-patricia-wild-1.wav">
      </audio>
    </div>
    <header>
      <nav [hidden]="onFrontPage">
        <a routerLinkActive="current" routerLink="/home">home</a>
        <a routerLinkActive="current" routerLink="/episodes">the main story (episodes)</a>
        <a routerLinkActive="current" routerLink="/characters">characters</a>
        <a routerLinkActive="current" routerLink="/narrative">supplemental story</a>
        <a routerLinkActive="current" routerLink="/reference">reference material</a>
      </nav>
      <h1>Welling Up</h1>
      <h2>a love story</h2>
    </header>

    <router-outlet (activate)="newComponentActivated($event)"></router-outlet>
  `
})
export class AppComponent implements OnInit {
  onFrontPage : Boolean = false;

  constructor(
    private state: ActiveState,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){
    // state.currentPath().then(resolvedPath => this.path = resolvedPath);
    // state.currentPath()
  }

  ngOnInit(): void {
    this.state.isNavigationVisible().subscribe(resource => this.onFrontPage = resource)
  }

  newComponentActivated(component: Event) {
    this.onFrontPage = ('/home' == this.router.routerState.snapshot.url);
  }

}
