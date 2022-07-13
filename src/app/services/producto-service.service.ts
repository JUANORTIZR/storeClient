import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Producto } from '../models/producto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urbBase = "http://localhost:8080/api/producto"
  constructor(private readonly http: HttpClient) { }


  post(producto: any): Observable<Producto> {
    const body = {
      id: Number(producto.id),
      descripcion: producto.descripcion,
      iva: Number(producto.iva),
      precioUnitario: Number(producto.precioUnitario)
    }

    console.log(body);

    return this.http.post<Producto>(this.urbBase + "/save", body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
      .pipe(
        tap(_ => console.log("Datos enviados")),
      )
  }
}

