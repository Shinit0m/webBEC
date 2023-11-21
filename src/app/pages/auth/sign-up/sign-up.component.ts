import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CuentasService } from '@auth/services/cuentas.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  formularioLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router, private supabase:CuentasService){}

  private initForm(): void{
    this.formularioLogin = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  async ngOnInit(){
    this.initForm();
  }
  onSubmit(): void{
    console.log('Save', this.formularioLogin.value);
  }

  async Registrar(){
    const formulario = this.formularioLogin.value;
    await this.supabase.addUsuarios(formulario.nombre, formulario.email, formulario.password);
  }
}
