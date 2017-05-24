import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <nav>
        <a routerLinkActive="current" routerLink="/home">home</a>
        <a routerLinkActive="current" routerLink="/episodes">the main story (episodes)</a>
        <a routerLinkActive="current" routerLink="/characters">characters</a>
        <a routerLinkActive="current" routerLink="/narrative">supplemental story</a>
        <a routerLinkActive="current" routerLink="/reference">reference material</a>
      </nav>
      <h1>{{name}}</h1>
      <h2>a love story</h2>
      <div class="episode-mini">
      	<p>episode 1</p>
			<audio controls="controls">
				<source src="audio/welling-up-patricia-wild-1.webm">
				<source src="audio/welling-up-patricia-wild-1.mp4">
				<source src="audio/welling-up-patricia-wild-1.mp3">
				<source src="audio/welling-up-patricia-wild-1.wav">
			</audio>
	 	</div>
    </header>

    <router-outlet></router-outlet>
  `
})
export class AppComponent  { name = 'Welling Up'; }
