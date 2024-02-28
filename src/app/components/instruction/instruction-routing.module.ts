import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';

const instructionRoutes: Routes = [
  {path: 'how-to-play', component: HowToPlayComponent},
];

@NgModule({
  imports: [RouterModule.forChild(instructionRoutes)],
  exports: [RouterModule]
})
export class InstructionRoutingModule { }