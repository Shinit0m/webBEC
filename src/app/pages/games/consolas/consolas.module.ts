import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsolasRoutingModule } from './consolas-routing.module';
import { ConsolasComponent } from './consolas.component';


@NgModule({
  declarations: [
    ConsolasComponent
  ],
  imports: [
    CommonModule,
    ConsolasRoutingModule
  ]
})
export class ConsolasModule { }
