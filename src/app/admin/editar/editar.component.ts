import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '@games/services/games.service';
import { categoriasRoutes } from 'src/app/helpers/categorias-routes';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{
  generoList: Array<any> = categoriasRoutes;
  nombre!: any;
  juegos: any[]=[];
  formUpdate!: FormGroup;

  constructor(private supabase: GamesService, private router:Router, private route: ActivatedRoute, private formBuilder: FormBuilder){
    this.nombre = this.route.snapshot.paramMap.get('nombre');
  }
  private initForm(): void{
    this.formUpdate = this.formBuilder.group({
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required],
      categoria: ['', Validators.required],
      consolas: ['', Validators.required]
    })
  }

  async ngOnInit(){
    this.juegos = await this.supabase.getJuegoNombre(this.nombre);
    this.initForm();
  }
  
  editJuego(){
    const formulario = this.formUpdate.value;
    this.supabase.updateJuego(this.nombre, formulario.descripcion, formulario.imagen, formulario.categoria, formulario.consolas);
    this.router.navigate(['juegos']);
    console.log('Save', formulario);
  }
}
