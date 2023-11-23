import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameviewRoutingModule } from './gameview-routing.module';
import { GameviewComponent } from './gameview.component';
import { CategoriasModule } from '@games/categorias/categorias.module';
import { CommentsModule } from '@comments/comments.module';

@NgModule({
  declarations: [
    GameviewComponent
  ],
  imports: [
    CommonModule,
    GameviewRoutingModule,
    CategoriasModule,
    CommentsModule
  ]
})
export class GameviewModule { }
