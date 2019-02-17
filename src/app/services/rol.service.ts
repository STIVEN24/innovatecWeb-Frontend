import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// --- models --- //
import { Rol } from '../models/Rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  // API_URI = 'http://localhost:3000/api/roles/';
  API_URI = 'https://innovatec-server.herokuapp.com/api/roles/';
  
  constructor(private http: HttpClient) { }

  getRols() {
    return this.http.get(`${this.API_URI}`);
  }

  getRol(id: number) {
    return this.http.get(`${this.API_URI}${id}`);
  }

  deleteRol(id: number) {
    return this.http.delete(`${this.API_URI}${id}`);
  }

  createRol(rol: Rol) {
    return this.http.post(`${this.API_URI}`, rol);
  }

  //   updateUser(id : number, updateUser : User ) : Observable<User> {
  //     return this.http.put(`${this.API_URI}/rols/${id}`, updateUser);
  //   }

}