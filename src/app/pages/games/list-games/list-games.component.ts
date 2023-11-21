import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categoriasRoutes } from 'src/app/helpers/categorias-routes';
import { consolasRoutes } from 'src/app/helpers/consolas-routes';
import { GamesService } from '@games/services/games.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit{
  generolist:Array<any> = categoriasRoutes;
  consolalist:Array<any> = consolasRoutes;
  consola = false;
  genero = false;
  route!: string;
  routes!: string[];
  juegos: any[] = [];
  juegoCon: any[] = [];
  constructor(private router: Router, private gameservice: GamesService){
    this.route = this.router.url;
    this.routes = this.route.split('/');
    for(let ruta of this.routes){
      this.route = ruta;
    }
    for(let categoria of this.generolist){
      if(categoria.nombre.toLowerCase() === this.route){
        this.genero = true;
        this.route = categoria.nombre;
        break;
      }
    }
    for(let consola of this.consolalist){
      if(consola.path.toLowerCase() === this.route){
        this.consola = true;
        this.route = consola.nombre;
        break;
      }
    }
  }

   async ngOnInit(){
    if(this.genero===true){
      this.juegos = await this.gameservice.getJuegosCategoria(this.route);
    console.log('this.juegos', this.juegos)
    }
    if(this.consola===true){
      this.juegos = await this.gameservice.getJuegos();
      for(let juego of this.juegos){
        if(juego.consola.includes(this.route)){
          this.juegoCon.push(juego)
        }
      }
      console.log('this.juegos', this.juegos)
    }
  }
}
