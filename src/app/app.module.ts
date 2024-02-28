import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharadeComponent } from './components/charade/charade.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { BrandComponent } from './components/brand/brand.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { ResultComponent } from './pages/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    CharadeComponent,
    HomeComponent,
    ButtonComponent,
    BrandComponent,
    HowToPlayComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
