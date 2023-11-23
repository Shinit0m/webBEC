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
  user!: string;
  adminAux: any[] = [];
  admin: any;

constructor(private busqueda:SearchService, private router: Router, private route:ActivatedRoute, private sesion: CuentasService){
  this.session = this.sesion.getSesion();
}
  async ngOnInit(){
    this.juegos = await this.busqueda.buscarJuego();
    this.session = this.sesion.getSesion();
    this.sesion.sesionUpdated.subscribe((sesion) => {
      this.session = sesion;
    });
    this.user = this.sesion.get_currentUser();
    this.sesion.user.subscribe((_currentUser) =>
    {this.user = _currentUser;
    });
  }

  Cerrar_Sesion(){
    this.sesion.setSesion(false);
    this.session = this.sesion.getSesion();
    console.log('Sesion cerrada');
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
