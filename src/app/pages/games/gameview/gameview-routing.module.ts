import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameviewComponent } from './gameview.component';

const routes: Routes = [{ path: '', component: GameviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameviewRoutingModule { }
