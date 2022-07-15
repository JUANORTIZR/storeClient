import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Cliente } from '../models/cliente';
import { Response } from './producto-service.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urbBase = "http://localhost:8080/api/cliente"
  constructor(private readonly http: HttpClient) { }

  getHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.getToken()
      })
    }
  }

  getToken():string{
    let token = localStorage.getItem('token')?.toString();
    if(token == undefined){
      return ""
    }
    return token;
  }
  post(cliente: any): Observable<Response> {
    const body = {
      identificacion: cliente.identificacion,
      nombres: cliente.nombres,
      apellidos: cliente.apellidos,
      correo: cliente.correo,
      direcciones: cliente.direcciones,
      telefonos: cliente.telefonos,
    }
    return this.http.post<Response>(this.urbBase + "/save", body, this.getHeader())
      .pipe(
        tap(_ => console.log("Datos enviados")),
      )
  }

  findAll():Observable<Response> {
    return this.http.get<Response>(this.urbBase+"/findAll", this.getHeader());
  }

  delete(id:any):Observable<Response>{
    return this.http.delete<Response>(this.urbBase + "/delete/"+id, this.getHeader());
  }

  findById(id:any):Observable<Response>{
    return this.http.get<Response>(this.urbBase + "/findById/"+id, this.getHeader());
  }

  update(cliente:any):Observable<Response>{
    const body = {
      identificacion: cliente.identificacion,
      nombres: cliente.nombres,
      apellidos: cliente.apellidos,
      correo: cliente.correo,
      direcciones: cliente.direcciones,
      telefonos: cliente.telefonos,
    }
    return this.http.put<Response>(this.urbBase + "/update/"+cliente.identificacion, body, this.getHeader());
  }
}
