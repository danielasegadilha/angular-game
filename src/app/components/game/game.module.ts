import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ResultComponent } from './result/result.component';
import { CharadeComponent } from './charade/charade.component';
import { GameRoutingModule } from './game-routing.module';
import { FeedbackComponent } from './result/feedback/feedback.component';
import { QuestionComponent } from './charade/question/question.component';

@NgModule({
  declarations: [CharadeComponent, ResultComponent, FeedbackComponent, QuestionComponent],
  imports: [SharedModule, GameRoutingModule]
})

export class GameModule { }
