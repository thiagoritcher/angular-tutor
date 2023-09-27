import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    Route1Component,
    Route2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
