import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharadeComponent } from './components/game/charade/charade.component';
import { HomeModule } from './components/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    CharadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
