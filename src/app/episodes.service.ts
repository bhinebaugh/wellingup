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
          "Backstories: Rocco, Donna",
          "1997 Ephemera (Need: Princess Di funeral images, Red Sox standings)",
          "Somerville Images: (Need: “cottage mansards,” banjo clock.)",
          "Mary Magdalen Images and Quotes (Need: more Noli me Tangere}",
          "Touch"
        ]
      },
      {
          id: 2,
          name: "Maudy Thursday, March, 1997 ",
          description: "Nine months earlier and Rocco’s got company. Who the hell is he?",
          image: "images/Podcast2.jpeg",
          audio: 'audio/welling-up-2.mp3',
          links: [
              "Backstories: Lily, Claire",
              "1997 Ephemera (Need: Eddie O’Brien images)",
              "Somerville Images (Need: College AveJ ohnnie’s Foodmaster, North Street Housing Project. WW II monument) ",
              "Greater-Boston Glossary and Maps  (\“Packy run,\” Red Line map.)"
          ]
      },

      {
          id: 3,
          name: "April, 1997: ",
          description: "Jewell meets 'Nomah.'",
          image: "images/Podcast3.jpeg",
          audio: 'audio/welling-up-3.mp3',
          links: [
              "1997 Ephemera: (Need: Herald/Governor Weld, Nomar Garciaparra, Mo Vaughn, Roger Clemens images)"
          ]
      },

      {
          id: 4,
          name: "May, 1997: ",
          description: "Personal care day for Rocco and Jewell—who has a date.",
          image: "images/Podcast4.jpeg",
          audio: 'audio/welling-up-4.mp3',
          links: [
              "Somerville Images (Need: clawtoed bathtub/working class bathroom)",
              "Mary Magdalen Images and Quotes: (add Titian painting; quotes re MM’s vanity.)",
              "Men in Jewell’s Life: Greg (aka “The New Boy Friend”), Jewell’s father"
          ]
      },

      {
          id: 5,
          name: "June, 1997: ",
          description: "'[Jesus’s] feet were wetted with [Mary Magdalene’s] tears and she wiped them with her hair, kissing them and anointing them with the myrrh.' Luke 7:37-39",
          image: "images/Podcast5.jpeg",
          audio: 'audio/welling-up-5.mp3',
          links: [
              "Somerville Images: (Need: dilapidated stockade fencing, paved back yard, ailanthus trees)",
              "MM Images and Quotes (Need MM washing Jesus’s feet images",
              "Women in Jewell’s Life: Checker (need Checker station wagon)"
          ]
      },

      {
          id: 6,
          name: "July, 1997 ",
          description: "You say 'fireflies,' I say 'lightening bugs.' We both say, 'I miss you.'",
          image: "images/Podcast6.jpeg",
          audio: 'audio/welling-up-6.mp3',
          links: [
              "Forgiveness"
          ]
      },

      {
          id: 7,
          name: "August, 1997 ",
          description: "Having heard disturbing gossip about Rocco, Jewell attends a Quaker meeting. And makes a painful decision.",
          image: "images/Podcast7.jpeg",
          audio: 'audio/welling-up-7.mp3',
          links: [
              "Somerville and Cambridge Images (Need: Friends Meeting at Cambridge, Longfellow Park.)",
              "About 'Noli Me Tangere'"
          ]
      },

      {
          id: 8,
          name: "October, 1997 ",
          description: "[Jesus] replies harshly—a harshness common in all translations—'Don’t hold on to me.' 'Don’t cling to me.' 'Touch me not.'  Mary Gordon, Reading Jesus, Pantheon Books, 2009",
          image: "images/Podcast8.jpeg",
          audio: 'audio/welling-up-8.mp3',
          links: [
              "Quakerese et al: Support group (FGC external link)",
              "1997 Ephemera (Red Sox)",
              "About Noli me Tangere"
          ]
      },

      {
          id: 9,
          name: "Thanksgiving, 1997 ",
          description: "'Everybody has a backstory.'",
          image: "images/Podcast9.jpeg",
          audio: 'audio/welling-up-9.mp3',
          links: [
              "Backstories: Rocco",
              "Touch",
              "Other men in Jewell’s Life: her stepfather"
          ]
      },

      {
          id: 10,
          name: "Christmas, 1997 ",
          description: "'This is heaven,' Jewell decides.",
          image: "images/Podcast10.jpeg",
          audio: 'audio/welling-up-10.mp3',
          links: [
              "Somerville and Cambridge Images (Need: corner stores/spas;  Christmas house decorations, lights; Union Square)",
              "1997 Ephemera (Need: phone booth)",
              "Other Women in Jewell’s Life: 'Olivia Walton,' Margaret",
              "Other Men in Jewell’s Life: her father"
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
