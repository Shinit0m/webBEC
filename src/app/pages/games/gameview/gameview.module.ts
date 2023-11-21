import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameviewRoutingModule } from './gameview-routing.module';
import { GameviewComponent } from './gameview.component';
import { CategoriasModule } from '@games/categorias/categorias.module';
import { ComentariosModule } from '@shared/comentarios/comentarios.module';

@NgModule({
  declarations: [
    GameviewComponent
  ],
  imports: [
    CommonModule,
    GameviewRoutingModule,
    CategoriasModule,
    ComentariosModule
  ]
})
export class GameviewModule { }
