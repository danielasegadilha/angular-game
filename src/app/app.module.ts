import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { InstructionModule } from './components/instruction/instruction.module';
import { GameModule } from './components/game/game.module';
import { RuleComponent } from './instruction/how-to-play/rule/rule.component';

@NgModule({
  declarations: [
    AppComponent,
    RuleComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    InstructionModule,
    GameModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
