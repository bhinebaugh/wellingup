import { Injectable } from '@angular/core';

@Injectable()
export class EpisodesService {

  episodes: Array<any>;

  constructor(){
    this.episodes = [
      {name:'Introduction', length:32, links: [1,3,5], description: 'a quick orientation to the story'},
      {name:'Episode 1', length:32, links: [1,3,5], description: 'getting into the story'}
    ]
  }

  getEpisodes() {
    // API request via XHR or fetch
    // promise
    return this.episodes
  }
}
