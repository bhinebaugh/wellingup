import { Component, HostBinding } from '@angular/core';

import { CharactersService } from './characters.service';
import { slideAnimation } from './animations';

@Component({
	animations: [ slideAnimation ],
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
	<div *ngFor="let character of characters" class="character">
		<h3>{{ character }}</h3>
	</div>
  `,
  providers: [ CharactersService ]
})
export class CharactersComponent {

	characters: Array<any>;

	constructor( charactersService: CharactersService ){
		this.characters = charactersService.getCharacters();
	}
}
