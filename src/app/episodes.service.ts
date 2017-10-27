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
          {title: "Rocco", url: "/page/18"},
          {title: "Donna", url: "BackStories: Donna"}
          {title: "1997 Ephemera", url: "1997 Ephemera"},
          {title: "Somerville Images", url: "Somerville Images"},
          {title: "Mary Magdalen Images and Quotes (Need: more Noli me Tangere}", url: "Images and Quotes re Mary Magdalen"},
          {title: "Touch", url: "Touch"}
        ]
      },
      {
          id: 2,
          name: "Maudy Thursday, March, 1997 ",
          description: "Nine months earlier and Rocco’s got company. Who the hell is he?",
          image: "images/Podcast2.jpeg",
          audio: 'audio/welling-up-2.mp3',
          links: [
              {title: "Lily", url: "Backstories: Lily"},
              {title: "Claire", url: "Backstories: Claire"},
              {title: "1997 Ephemera", url: "1997 Ephemera"},
              {title: "Somerville Images", url: "Somerville Images"},
              {title: "Greater-Boston Glossary and Maps", url: "Greater-Boston Maps"}
          ]
      },

      {
          id: 3,
          name: "April, 1997: ",
          description: "Jewell meets 'Nomah.'",
          image: "images/Podcast3.jpeg",
          audio: 'audio/welling-up-3.mp3',
          links: [
              {title: "1997 Ephemera", url: "1997 Ephemera"}
          ]
      },

      {
          id: 4,
          name: "May, 1997: ",
          description: "Personal care day for Rocco and Jewell—who has a date.",
          image: "images/Podcast4.jpeg",
          audio: 'audio/welling-up-4.mp3',
          links: [
              {title: "Somerville Images", url: "Somerville Images"},
              {title: "Images and Quotes re Mary Magdalen", url: "Images and Quotes re Mary Magdalen"},
              {title: "Greg", url: "Greg"},
              {title: "Jewell's Father", url: "Jewell's Father"}
          ]
      },

      {
          id: 5,
          name: "June, 1997: ",
          description: "'[Jesus’s] feet were wetted with [Mary Magdalene’s] tears and she wiped them with her hair, kissing them and anointing them with the myrrh.' Luke 7:37-39",
          image: "images/Podcast5.jpeg",
          audio: 'audio/welling-up-5.mp3',
          links: [
              {title: "Somerville Images", url: "Somerville Images"},
              {title: "MM Images and Quotes", url: "Images and Quotes re Mary Magdalen"},
              {title: "Checker", url: "Checker"}
          ]
      },

      {
          id: 6,
          name: "July, 1997 ",
          description: "You say 'fireflies,' I say 'lightening bugs.' We both say, 'I miss you.'",
          image: "images/Podcast6.jpeg",
          audio: 'audio/welling-up-6.mp3',
          links: [
              {title: "Forgiveness", url: "Forgiveness"}
          ]
      },

      {
          id: 7,
          name: "August, 1997 ",
          description: "Having heard disturbing gossip about Rocco, Jewell attends a Quaker meeting. And makes a painful decision.",
          image: "images/Podcast7.jpeg",
          audio: 'audio/welling-up-7.mp3',
          links: [
              {title: "Somerville and Cambridge Images", url: "Somerville Images"},
              {title: "About 'Noli Me Tangere'", url: "Noli Me Tangere"}
          ]
      },

      {
          id: 8,
          name: "October, 1997 ",
          description: "[Jesus] replies harshly—a harshness common in all translations—'Don’t hold on to me.' 'Don’t cling to me.' 'Touch me not.'  Mary Gordon, Reading Jesus, Pantheon Books, 2009",
          image: "images/Podcast8.jpeg",
          audio: 'audio/welling-up-8.mp3',
          links: [
              {title: "Quakerese et al: Support group (FGC external link)", url: "Quakerese"},
              {title: "1997 Ephemera (Red Sox)", url: "1997 Ephemera"},
              {title: "About Noli me Tangere", url: "Noli Me Tangere"}
          ]
      },

      {
          id: 9,
          name: "Thanksgiving, 1997 ",
          description: "'Everybody has a backstory.'",
          image: "images/Podcast9.jpeg",
          audio: 'audio/welling-up-9.mp3',
          links: [
              {title: "Backstories: Rocco", url: "Rocco"},
              {title: "Touch", url: "Touch"},
              {title: "Other men in Jewell’s Life: her stepfather", url: "Jewell's Stepfather"}
          ]
      },

      {
          id: 10,
          name: "Christmas, 1997 ",
          description: "'This is heaven,' Jewell decides.",
          image: "images/Podcast10.jpeg",
          audio: 'audio/welling-up-10.mp3',
          links: [
              {title: "Somerville and Cambridge Images (Need: corner stores/spas;  Christmas house decorations, lights; Union Square)", url: "Somerville Images"},
              {title: "1997 Ephemera (Need: phone booth)", url: "1997 Ephemera"},
              {title: "Other Women in Jewell’s Life: 'Olivia Walton,' Margaret", url: "Olivia Walton"},
              {title: "Other Men in Jewell’s Life: her father", url: "Jewell's Father"}
          ]
      }

    ]
  }

  getEpisodes() {
    // API request via XHR or fetch
    // promise
    return this.episodes
  }
}
