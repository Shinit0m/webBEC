import { Component } from '@angular/core';
import { consolasRoutes } from 'src/app/helpers/consolas-routes';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.css']
})
export class ConsolasComponent {
  routes: Array<any> = consolasRoutes;

}
