import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ResultComponent } from './result/result.component';
import { CharadeComponent } from './charade/charade.component';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  declarations: [CharadeComponent, ResultComponent],
  imports: [SharedModule, GameRoutingModule]
})

export class GameModule { }
