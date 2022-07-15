import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Response } from './producto-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urbBase = "http://localhost:8080/api"
  constructor(private readonly http: HttpClient) { }

  header = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }


  login(usuario: any, clave:string): Observable<Response> {
    const body = {
      nombreUsuario: usuario,
      clave: clave,
    }
    return this.http.post<Response>(this.urbBase + "/login", body)
      .pipe(
        tap(_ => console.log("Datos enviados")),
      )
  }
}
