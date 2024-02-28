import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharadeComponent } from './charade/charade.component';
import { ResultComponent } from './result/result.component';

const gameRoutes: Routes = [
  {path: 'game/charade', component: CharadeComponent},
  {path: 'game/result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forChild(gameRoutes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }