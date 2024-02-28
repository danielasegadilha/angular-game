import { NgModule } from '@angular/core';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { InstructionRoutingModule } from './instruction-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HowToPlayComponent],
  imports: [
    SharedModule, 
    InstructionRoutingModule]
})

export class InstructionModule { }
