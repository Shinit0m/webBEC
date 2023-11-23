import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CuentasService } from '@auth/services/cuentas.service';
import { CommentsService } from '@comments/comments.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formularioLogin!: FormGroup;
  usuarios: any[] = []

  constructor(private formBuilder: FormBuilder, private router:Router, private supabase:CuentasService, private comment: CommentsService){}

  private initForm(): void{
    this.formularioLogin = this.formBuilder.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async ngOnInit(){
    this.initForm();
  }
  onSubmit(): void{
    console.log('Save', this.formularioLogin.value);
  }

  async Ingresar(){
    const formulario = this.formularioLogin.value;
    this.usuarios = await this.supabase.GetUsuarios(formulario.nombre);
    for(let usuario of this.usuarios){
      if(usuario.Usuarios === formulario.nombre && usuario.Password === formulario.password){
        console.log('Encontro usuario');
        this.supabase.setSesion(true);
        this.supabase.set_currentUser(formulario.nombre);
        this.router.navigate(['home']);
      }else{
        console.log('No encontro usuario', usuario);
      }
    }
  }
}
