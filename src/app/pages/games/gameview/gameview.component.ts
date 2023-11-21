import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '@games/services/games.service';

@Component({
  selector: 'app-gameview',
  templateUrl: './gameview.component.html',
  styleUrls: ['./gameview.component.css']
})
export class GameviewComponent implements OnInit{
  nombre!: any;
  juegos: any[]=[];
  constructor(private router: Router, private route: ActivatedRoute, private gameservice: GamesService){
    this.nombre = this.route.snapshot.paramMap.get('nombre');
  }
  async ngOnInit(){
    this.juegos = await this.gameservice.getJuegoNombre(this.nombre);
    console.log('this.juegos', this.juegos);
  }
}
