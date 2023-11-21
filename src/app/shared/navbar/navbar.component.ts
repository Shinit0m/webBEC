import { Component, OnInit} from '@angular/core';
import { SearchService } from '@shared/services/search.service';
import { CuentasService } from '@auth/services/cuentas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  juegos: any[] = [];
  searchQuery: string = '';
  buscar!: string;
  encontrado!: boolean;
  session!: boolean;

constructor(private busqueda:SearchService, private router: Router, private route:ActivatedRoute){
  
}
  async ngOnInit(){
    this.juegos = await this.busqueda.buscarJuego();
  }
  Iniciar_Sesion(){
    this.session = false;
  }
  Cerrar_Sesion(){
    this.session = true;
  }
  Buscar(){
    if(this.searchQuery.trim() !== ''){
      for(let juego of this.juegos){
      if(this.searchQuery.toLowerCase() === juego.titulo.toLowerCase()){
        this.buscar = juego.titulo;
      }else{
        this.encontrado = true;
        setTimeout(() => {
          this.encontrado = false;
        }, 2500);
      }
    }
    this.router.navigate(['/juegos/', this.buscar]).then(() => {
      location.reload();
    });
    }else{
      this.encontrado = true;
      setTimeout(() => {
        this.encontrado = false;
      }, 2500);
    }
  }
}
