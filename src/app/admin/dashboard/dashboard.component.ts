import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '@games/services/games.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  juegos: any[] = [];
  currentGame: any[] = [];
  constructor(private supabase: GamesService, private router: Router, private route:ActivatedRoute){
  }
  async ngOnInit(){
    this.juegos = await this.supabase.getJuegos();
  }
  onSelect(juego: any){
    this.currentGame = juego;
  }
  BorrarJuego(nombre:string){
    this.supabase.DeleteJuego(nombre).then((res) => {
      location.reload();
    });
  }

}
