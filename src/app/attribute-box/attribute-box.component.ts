import { Component, OnInit, Input } from '@angular/core';
import { getModifier } from '../character';

@Component({
  selector: 'app-attribute-box',
  templateUrl: './attribute-box.component.html',
  styleUrls: ['./attribute-box.component.scss']
})
export class AttributeBoxComponent implements OnInit {

  @Input() title?: string;
  @Input() value?: number;
  @Input() onClick?: Function;
  @Input() showModifer: boolean = false;
  private modifier: number = 0;
  public modifierText: string = "";

  constructor() {}

  ngOnInit(): void {
    if(this.value){
      this.modifier = getModifier(this.value);
      this.modifierText = this.modifier >= 0 ? `+${this.modifier.toString()}` : this.modifier.toString();
    }
  }

  clickEvent(): void {
    if(this.onClick){
      this.onClick!(this.value);
    }
  }

}
