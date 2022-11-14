import { Component, OnInit, Input } from '@angular/core';
import { character_skill } from '../skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skill?: character_skill;
  @Input() onClick?: Function;
  public valArr: number[] = [];
  public alignDots: string = "0";

  constructor() { }

  ngOnInit(): void {
    if(this.skill){
      this.valArr = new Array(this.skill.level);
      this.alignDots = `${this.skill.level*-1}rem`;
    }
  }

  click(): void {
    if(this.skill){
      if(this.onClick){
        this.onClick(this.skill.level+2);
      }
    }
  }

}
