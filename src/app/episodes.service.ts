import { Injectable } from '@angular/core';

@Injectable()
export class EpisodesService {

  episodes: Array<any>;

  constructor(){
    this.episodes = [
      // {name:'Introduction', audio:'audio/welling-up-intro'},
      {
        id: 1,
        name:'Prologue: December, 1997',
        description: "It’s the Thursday before Christmas; it’s just another work day. Or so Jewell assumes until she walks up Rocco’s plywood ramp.",
        image: "images/Podcast1.jpeg",
        audio:'audio/welling-up-1.mp3',
        links: [
          {title: "Rocco", url: "/page/18/Rocco"},
          {title: "Donna", url: "/page/150/Donna"},
          {title: "1997 Ephemera", url: "/page/393/Reference:%201997%20Ephemera"},
          {title: "Images and Quotes re Mary Magdalen", url: "/page/53/Images%20and%20Quotes%20re%20Mary%20Magdalen"},
          {title: "Touch", url: "/page/29/Touch"}
        ]
      },
      {
          id: 2,
          name: "Maudy Thursday, March, 1997",
          description: "Nine months earlier and Rocco’s got company. Who the hell is he?",
          image: "images/Podcast2.jpeg",
          audio: 'audio/welling-up-2.mp3',
          links: [
              {title: "Lily", url: "/page/159/Lily"},
              {title: "Claire", url: "/page/134/Claire"},
              {title: "1997 Ephemera", url: "/page/393/Reference:%201997%20Ephemera"},
              {title: "Greater-Boston Maps", url: "/page/245/Greater%20Boston%20Maps"}
          ]
      },

      {
          id: 3,
          name: "April, 1997",
          description: "Jewell meets 'Nomah.'",
          image: "images/Podcast3.jpeg",
          audio: 'audio/welling-up-3.mp3',
          links: [
              {title: "1997 Ephemera", url: "/page/393/Reference:%201997%20Ephemera"}
          ]
      },

      {
          id: 4,
          name: "May, 1997",
          description: "Personal care day for Rocco and Jewell—who has a date.",
          image: "images/Podcast4.jpeg",
          audio: 'audio/welling-up-4.mp3',
          links: [
              {title: "Images and Quotes re Mary Magdalen", url: "/page/53/Images%20and%20Quotes%20re%20Mary%20Magdalen"},
              {title: "Greg", url: "/page/120/Greg"}
          ]
      },

      {
          id: 5,
          name: "June, 1997",
          description: "'[Jesus’s] feet were wetted with [Mary Magdalene’s] tears and she wiped them with her hair, kissing them and anointing them with the myrrh.' Luke 7:37-39",
          image: "images/Podcast5.jpeg",
          audio: 'audio/welling-up-5.mp3',
          links: [
              {title: "Images and Quotes re Mary Magdalen", url: "/page/53/Images%20and%20Quotes%20re%20Mary%20Magdalen"},
              {title: "Checker", url: "/page/576/Checker"}
          ]
      },

      {
          id: 6,
          name: "July, 1997",
          description: "You say 'fireflies,' I say 'lightening bugs.' We both say, 'I miss you.'",
          image: "images/Podcast6.jpeg",
          audio: 'audio/welling-up-6.mp3',
          links: [
              {title: "Forgiveness", url: "/page/23/Forgiveness"}
          ]
      },

      {
          id: 7,
          name: "August, 1997",
          description: "Having heard disturbing gossip about Rocco, Jewell attends a Quaker meeting. And makes a painful decision.",
          image: "images/Podcast7.jpeg",
          audio: 'audio/welling-up-7.mp3',
          links: [
              {title: "About Noli Me Tangere", url: "/page/230/About%20Noli%20me%20Tangere"}
          ]
      },

      {
          id: 8,
          name: "October, 1997",
          description: "[Jesus] replies harshly—a harshness common in all translations—'Don’t hold on to me.' 'Don’t cling to me.' 'Touch me not.'  Mary Gordon, Reading Jesus, Pantheon Books, 2009",
          image: "images/Podcast8.jpeg",
          audio: 'audio/welling-up-8.mp3',
          links: [
              {title: "1997 Ephemera", url: "/page/393/Reference:%201997%20Ephemera"},
              {title: "About Noli me Tangere", url: "/page/230/About%20Noli%20me%20Tangere"}
          ]
      },

      {
          id: 9,
          name: "Thanksgiving, 1997",
          description: "'Everybody has a backstory.'",
          image: "images/Podcast9.jpeg",
          audio: 'audio/welling-up-9.mp3',
          links: [
              {title: "Backstories: Rocco", url: "/page/18/Rocco"},
              {title: "Touch", url: "/page/29/Touch"}
          ]
      },

      {
          id: 10,
          name: "Christmas, 1997",
          description: "'This is heaven,' Jewell decides.",
          image: "images/Podcast10.jpeg",
          audio: 'audio/welling-up-10.mp3',
          links: [
              {title: "1997 Ephemera", url: "/page/393/Reference:%201997%20Ephemera"},
              {title: "Margaret", url: "/page/124/Margaret"}
          ]
      }

    ]
  }

  getEpisodes() {
    // API request via XHR or fetch
    // promise
    return this.episodes
  }
  getEpisode( id : number ) {
      return this.episodes[id]
  }
}
