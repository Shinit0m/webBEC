import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGamesRoutingModule } from './list-games-routing.module';
import { ListGamesComponent } from './list-games.component';


@NgModule({
  declarations: [
    ListGamesComponent
  ],
  imports: [
    CommonModule,
    ListGamesRoutingModule,
  ]
})
export class ListGamesModule { }
