import { Injectable } from '@angular/core';

@Injectable()
export class CharactersService {
	characters: Array<any>;
	
	constructor() {
		this.characters = [
			// women:
			"​Jewell",
			"Claire",
			"​Donna",
			"​Lily",
			"​Nadine",
			"​Margaret",
			"​Dell—and Shannon",
			"​Marla",
			"​Nana",
			"​Checker",
			"​“Olivia Walton”",
			// men:
			"Rocco", 
			"Greg", 
			"​Sean McCormick", 
			"​Douglas (aka The Viking)", 
			"​Wheeler", 
			​"Mr. Allen"
		]
	}
	
	getCharacters() {
		return this.characters
	}
}
