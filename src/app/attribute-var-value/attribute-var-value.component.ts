import { Component, Input, OnInit } from '@angular/core';

import { attributeVar } from '../attribute-var';

@Component({
  selector: 'app-attribute-var-value',
  templateUrl: './attribute-var-value.component.html',
  styleUrls: ['./attribute-var-value.component.scss']
})
export class AttributeVarValueComponent implements OnInit {

  @Input() title: string = "";
  @Input() attribute?: attributeVar;

  constructor() { }

  ngOnInit(): void {
  
  }

}
