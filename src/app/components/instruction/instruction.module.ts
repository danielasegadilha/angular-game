import { NgModule } from '@angular/core';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { InstructionRoutingModule } from './instruction-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RuleComponent } from './how-to-play/rule/rule.component';

@NgModule({
  declarations: [HowToPlayComponent, RuleComponent],
  imports: [
    SharedModule, 
    InstructionRoutingModule]
})

export class InstructionModule { }
