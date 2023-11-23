import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
   }

  async getJuegosCategoria(genero: string){
    const juegos = await this.supabase
  .from('Juegos')
  .select()
  .eq('categorias', genero)
  return juegos.data || [];
   }

   async getJuegos(){
    const juegos = await this.supabase
  .from('Juegos')
  .select()
  return juegos.data || [];
   }

   async getJuegoNombre(nombre: string){
    const juegos = await this.supabase
  .from('Juegos')
  .select()
  .eq('titulo', nombre)
  return juegos.data || [];
   }

   async updateJuego(nombre: string, descripcion: string, imagen: string, categorias: string, consolas: any[]){
    const { data, error } = await this.supabase
  .from('Juegos')
  .update({
    descripcion: descripcion,
    imagen: imagen,
    categorias: categorias,
    consola: consolas,
  })
  .eq('titulo', nombre)
  .select()
   }

   async CreateJuego(nombre: string, descripcion: string, imagen: string, categorias: string, consolas: any[]){
    const { data, error } = await this.supabase
      .from('Juegos')
      .insert({
        titulo: nombre,
        descripcion: descripcion,
        imagen: imagen,
        categorias: categorias,
        consola: consolas,
    })
  .select()
   }

   async DeleteJuego(nombre: string){
    const { error } = await this.supabase
  .from('Juegos')
  .delete()
  .eq('titulo', nombre)
   }
}