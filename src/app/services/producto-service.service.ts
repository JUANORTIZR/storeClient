import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Producto } from '../models/producto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface Response{
  message: string;
  status: boolean;
  object: any;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urbBase = "http://localhost:8080/api/producto"
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
  post(producto: any): Observable<Response> {
    const body = {
      id: Number(producto.id),
      descripcion: producto.descripcion,
      iva: Number(producto.iva),
      precioUnitario: Number(producto.precioUnitario)
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

  update(producto:any):Observable<Response>{
    const body = {
      id: Number(producto.id),
      descripcion: producto.descripcion,
      iva: Number(producto.iva),
      precioUnitario: Number(producto.precioUnitario)
    }
    return this.http.put<Response>(this.urbBase + "/update/"+producto.id, body,this.getHeader());
  }
}

