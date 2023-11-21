import { Component } from '@angular/core';
import { categoriasRoutes } from 'src/app/helpers/categorias-routes';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  routes: Array<any> = categoriasRoutes;

}
