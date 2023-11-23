import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GamesService } from '@games/services/games.service';
import { categoriasRoutes } from 'src/app/helpers/categorias-routes';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit{
  generoList: Array<any> = categoriasRoutes;
  formCreate!: FormGroup;
  constructor(private supabase: GamesService, private formBuilder: FormBuilder, private router:Router){}

  private initForm(): void{
    this.formCreate = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required],
      categoria: ['', Validators.required],
      consolas: ['', Validators.required]
    })
  }

  async ngOnInit(){
    this.initForm();
  }

  crearJuego(){
    const formulario = this.formCreate.value;
    this.supabase.CreateJuego(formulario.nombre,formulario.descripcion, formulario.imagen, formulario.categoria, formulario.consolas);
    this.router.navigate(['juegos']);
  }
}
