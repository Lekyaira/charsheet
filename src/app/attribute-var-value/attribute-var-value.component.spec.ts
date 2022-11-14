import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeVarValueComponent } from './attribute-var-value.component';

describe('AttributeVarValueComponent', () => {
  let component: AttributeVarValueComponent;
  let fixture: ComponentFixture<AttributeVarValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeVarValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeVarValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
