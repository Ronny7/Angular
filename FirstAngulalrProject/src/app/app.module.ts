import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comop1Component } from './comop1/comop1.component';
import { NavtopComponent } from './navtop/navtop.component';
import { RightComponent } from './right/right.component';
import { BootomComponent } from './bootom/bootom.component';

@NgModule({
  declarations: [
    AppComponent,
    Comop1Component,
    NavtopComponent,
    RightComponent,
    BootomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
