import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  user!: string;
  constructor() { }
  setUser(nombre: string){
    this.user = nombre
  }
  getUser(){
    return this.user;
  }
  newComment(){}
  getComments(){}
  updateComment(){}
}
