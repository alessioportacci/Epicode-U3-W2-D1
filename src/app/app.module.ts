import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    Header2Component,
    Header3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
