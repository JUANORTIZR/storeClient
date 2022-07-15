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

  post(rol: any): Observable<Response> {
    const body = {
      id: Number(rol.id),
      nombre: rol.nombre,
    }
    return this.http.post<Response>(this.urbBase + "/save", body, this.getHeader())
      .pipe(
        tap(_ => console.log("Datos enviados")),
      )
  }

  findAll():Observable<Response> {
    return this.http.get<Response>(this.urbBase+"/findAll",this.getHeader());
  }

  delete(id:any):Observable<Response>{
    return this.http.delete<Response>(this.urbBase + "/delete/"+id,this.getHeader());
  }

  update(rol:any):Observable<Response>{
    const body = {
      id: Number(rol.id),
      nombre: rol.nombre,
    }
    return this.http.put<Response>(this.urbBase + "/update/"+rol.id, body,this.getHeader());
  }
}
