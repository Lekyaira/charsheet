import { Injectable } from '@angular/core';

import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  getCharacter(id: number): Character {
    return {
      name: 'Test Guy',
      species: 'Human',
      class: 'Fighter',
      level: 1,
      strength: 17,
      dexterity: 12,
      charisma: 10,
      intelligence: 6,
      luck: 10,
      hp: {
        value: 5,
        maximum: 5
      },
      wp: {
        value: 9,
        maximum: 9
      },
      ac: 8,
      experience: 0,
      skills: [
        {name: 'Athletics', level: 2},
        {name: 'History', level: 1},
        {name: 'Combat', level: 3},
        {name: 'Diplomacy', level: 1},
      ],
    };
  }
}
