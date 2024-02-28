import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ResultComponent } from './result/result.component';
import { CharadeComponent } from './charade/charade.component';
import { GameRoutingModule } from './game-routing.module';
import { FeedbackComponent } from './result/feedback/feedback.component';

@NgModule({
  declarations: [CharadeComponent, ResultComponent, FeedbackComponent],
  imports: [SharedModule, GameRoutingModule]
})

export class GameModule { }
