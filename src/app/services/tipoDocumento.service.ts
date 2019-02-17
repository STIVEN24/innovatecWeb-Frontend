import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// --- models --- //
import { TipoDocumento } from '../models/TipoDocumento';

@Injectable({
    providedIn: 'root'
})
export class TipoDocumentoService {

    // API_URI = 'http://localhost:3000/api/tiposDocumento/';
    API_URI = 'https://innovatec-server.herokuapp.com/api/tiposDocumento/';

    constructor(private http: HttpClient) { }

    getTiposDocumento() {
        return this.http.get(`${this.API_URI}`);
    }

    getTipoDocumento(id: number) {
        return this.http.get(`${this.API_URI}${id}`);
    }

    deleteTipoDocumento(id: number) {
        return this.http.delete(`${this.API_URI}${id}`);
    }

    createTipoDocumento(tipoDocumento: TipoDocumento) {
        return this.http.post(`${this.API_URI}`, tipoDocumento);
    }

    //   updateUser(id : number, updateUser : User ) : Observable<User> {
    //     return this.http.put(`${this.API_URI}/rols/${id}`, updateUser);
    //   }

}