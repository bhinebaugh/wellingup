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
        description: "(Trees: Pine tree with red ornaments on it; one ornament at base of tree, apple and maple trees bare)",
        audio:'audio/welling-up-patricia-wild-1',
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
          description: "Trees: Pine tree as is, apple tree with pastel eggs hanging from it, maple tree bare",
          audio: 'audio/',
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
          description: "Trees: Pine tree as is, apple tree with white buds on it, maple tree with small, pale green leaves",
          audio: 'audio/',
          links: [
              "1997 Ephemera: (Need: Herald/Governor Weld, Nomar Garciaparra, Mo Vaughn, Roger Clemens images)"
          ]
      },

      {
          id: 4,
          name: "May, 1997: ",
          description: "Trees: Pine tree as is, apple tree with small, pale green leaves, maple tree with green leaves",
          audio: 'audio/',
          links: [
              "Somerville Images (Need: clawtoed bathtub/working class bathroom)",
              "Mary Magdalen Images and Quotes: (add Titian painting; quotes re MM’s vanity.)",
              "Men in Jewell’s Life: Greg (aka “The New Boy Friend”), Jewell’s father"
          ]
      },

      {
          id: 5,
          name: "June, 1997: ",
          description: "Trees: Pine tree as is, apple tree with green leaves, small, green balls, maple tree with green leaves.",
          audio: 'audio/',
          links: [
              "Somerville Images: (Need: dilapidated stockade fencing, paved back yard, ailanthus trees)",
              "MM Images and Quotes (Need MM washing Jesus’s feet images",
              "Women in Jewell’s Life: Checker (need Checker station wagon)"
          ]
      },

      {
          id: 6,
          name: "July, 1997 ",
          description: "Trees in shadow, tiny, yellow lights? (Fireflies",
          audio: 'audio/',
          links: [
              "Forgiveness"
          ]
      },

      {
          id: 7,
          name: "August, 1997 ",
          description: "Pine tree as is, apple and maple trees' leaves brownish-green",
          audio: 'audio/',
          links: [
              "Somerville and Cambridge Images (Need: Friends Meeting at Cambridge, Longfellow Park.)",
              "About 'Noli Me Tangere'"
          ]
      },

      {
          id: 8,
          name: "October, 1997 ",
          description: "Pine tree as is, apple tree with red apples and green leaves, maple tree leaves yellow",
          audio: 'audio/',
          links: [
              "Quakerese et al: Support group (FGC external link)",
              "1997 Ephemera (Red Sox)",
              "About Noli me Tangere"
          ]
      },

      {
          id: 9,
          name: "Thanksgiving, 1997 ",
          description: "Pine tree as is, apple tree and maple trees bare",
          audio: 'audio/',
          links: [
              "Backstories: Rocco",
              "Touch",
              "Other men in Jewell’s Life: her stepfather"
          ]
      },

      {
          id: 10,
          name: "Christmas, 1997 ",
          description: "Pine tree with red ornaments on it, apple and maple trees bare",
          audio: 'audio/',
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
