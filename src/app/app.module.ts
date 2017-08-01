import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AttributeService } from './services/attribute.service';

import { AppComponent } from './app.component';
import { InputAttrsDirective } from './directives/input-attrs.directive';
import { DynamicAttribsComponent } from './dynamic-attribs/dynamic-attribs.component';

@NgModule({
  declarations: [
    AppComponent,
    InputAttrsDirective,
    DynamicAttribsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AttributeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
