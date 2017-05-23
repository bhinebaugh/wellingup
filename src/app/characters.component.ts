import { Component } from '@angular/core';

import { CharactersService } from './characters.service';

@Component({
  selector: 'characters',
  styles: [`
  	.character { 
  		border: solid 1px #ddd;
  		float: left;
  		margin: 1rem;
  	}
  	img { background: #ccc; padding: 1rem 1rem 0; }
  	h3 { padding: 0 1.5rem; }
  `],
  template: `
  <ul>
  	<div *ngFor="let character of characters" class="character">
			<img src="images/silhouette.png"/>
			<h3>{{ character }}</h3>
  	</div>
	</ul>
  `,
  providers: [ CharactersService ]
})
export class CharactersComponent {
	characters: Array<any>;
	
	constructor( charactersService: CharactersService ){
		this.characters = charactersService.getCharacters();
	}
}
