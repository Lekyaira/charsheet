import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainSheetComponent } from './main-sheet/main-sheet.component';
import { AttributeBoxComponent } from './attribute-box/attribute-box.component';
import { SkillComponent } from './skill/skill.component';
import { AttributeVarValueComponent } from './attribute-var-value/attribute-var-value.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSheetComponent,
    AttributeBoxComponent,
    SkillComponent,
    AttributeVarValueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
