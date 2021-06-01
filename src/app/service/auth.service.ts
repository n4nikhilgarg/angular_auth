import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor( 
    private http : HttpClient
  ) { }

  register(model:object){
    return this.http.post<any>('https://reqres.in/api/register', model);
  }

  login(model:object){
      return this.http.post<any>('https://reqres.in/api/login', model);
  }

  checkAuth(){
    return !!localStorage.getItem('token');
  }

}
