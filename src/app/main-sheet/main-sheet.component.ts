import { Component, OnInit } from '@angular/core';

import { Character, getModifier } from '../character';

import { CharacterService } from '../character.service';

@Component({
  selector: 'app-main-sheet',
  templateUrl: './main-sheet.component.html',
  styleUrls: ['./main-sheet.component.scss']
})
export class MainSheetComponent implements OnInit {

  public character?: Character;

  public charDefenses = {
    fortitude: 0,
    reflexes: 0,
    will: 0,
    insight: 0,
    ac: 0
  };

  constructor(
    public characterService: CharacterService,
  ) { }

  ngOnInit(): void {
    this.character = this.characterService.getCharacter(1);
    this.charDefenses = {
      fortitude: 10 + getModifier(this.character.strength),
      reflexes: 10 + getModifier(this.character.dexterity),
      will: 10 + getModifier(this.character.charisma),
      insight: 10 + getModifier(this.character.intelligence),
      ac: 10 + getModifier(this.character.dexterity) + this.character.ac
    }
  }

  abilityClick(val: number): void {
    console.log(`Clicked ability score for ${val}!`);
  }

  skillClick(val: number): void {
    console.log(`Clicked skill: ${val}!`);
  }
}
