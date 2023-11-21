import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Cuentas } from 'src/app/models/cuentas';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {
  private supabase: SupabaseClient;
  constructor() { 
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }
  async GetUsuarios(usuario: string){
    const cuentas = await this.supabase
    .from('Cuentas')
    .select()
    .eq('Usuarios', usuario)

    return cuentas.data || [];
  }

  async addUsuarios(usuario: string, email: string, password: string){
    const { error } = await this.supabase
  .from('Cuentas')
  .insert([
    { Usuarios: usuario, Email: email , Password: password },
  ])
  .select()
  }

}
