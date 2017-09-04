import { Injectable } from '@angular/core';

@Injectable()
export class EpisodesService {

  episodes: Array<any>;

  constructor(){
    this.episodes = [
      {name:'Introduction', audio:'audio/welling-up-intro'},
      {name:'Episode 1', audio:'audio/welling-up-patricia-wild-1'},
      {name:'Episode 2', audio:'audio/welling-up-2'}
      // {name:'Episode 3', audio:'audio/'},
      // {name:'Episode 4', audio:'audio/'},
      // {name:'Episode 5', audio:'audio/'},
      // {name:'Episode 6', audio:'audio/'},
      // {name:'Episode 7', audio:'audio/'},
      // {name:'Episode 8', audio:'audio/'}
    ]
  }

  getEpisodes() {
    // API request via XHR or fetch
    // promise
    return this.episodes
  }
}
