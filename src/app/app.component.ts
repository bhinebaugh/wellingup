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
    </header>

    <router-outlet></router-outlet>
  `
})
export class AppComponent  { name = 'Welling Up'; }
