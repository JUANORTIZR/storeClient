import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { FormaDePago } from '../models/formaDePago';
import { Response } from './producto-service.service';

@Injectable({
  providedIn: 'root'
})
export class FormaDePagoService {

  urbBase = "http://localhost:8080/api/formaDePago"
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


  post(formaDePago: FormaDePago): Observable<Response> {
    const body = {
      id: Number(formaDePago.id),
      formaDePago: formaDePago.formaDePago,
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

  update(formaDePago:FormaDePago):Observable<Response>{
    const body = {
      id: Number(formaDePago.id),
      formaDePago: formaDePago.formaDePago,
    }
    return this.http.put<Response>(this.urbBase + "/update/"+formaDePago.id, body,this.getHeader());
  }
}
