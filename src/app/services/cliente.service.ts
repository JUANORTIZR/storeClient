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

  header = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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
    return this.http.post<Response>(this.urbBase + "/save", body, this.header)
      .pipe(
        tap(_ => console.log("Datos enviados")),
      )
  }

  findAll():Observable<Response> {
    return this.http.get<Response>(this.urbBase+"/findAll");
  }

  delete(id:any):Observable<Response>{
    return this.http.delete<Response>(this.urbBase + "/delete/"+id);
  }

  findById(id:any):Observable<Response>{
    return this.http.get<Response>(this.urbBase + "/findById/"+id);
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
    return this.http.put<Response>(this.urbBase + "/update/"+cliente.identificacion, body);
  }
}
