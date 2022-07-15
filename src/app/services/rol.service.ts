import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Response } from './producto-service.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  urbBase = "http://localhost:8080/api/rol"
  constructor(private readonly http: HttpClient) { }

  header = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  post(rol: any): Observable<Response> {
    const body = {
      id: Number(rol.id),
      nombre: rol.nombre,
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

  update(rol:any):Observable<Response>{
    const body = {
      id: Number(rol.id),
      nombre: rol.nombre,
    }
    return this.http.put<Response>(this.urbBase + "/update/"+rol.id, body);
  }
}
