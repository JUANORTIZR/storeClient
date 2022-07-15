import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Factura } from '../models/factura';
import { Response } from './producto-service.service';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  urbBase = "http://localhost:8080/api/factura"
  constructor(private readonly http: HttpClient) { }

  header = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  post(factura: Factura): Observable<Response> {
    const body = {
      id: Number(factura.id),
      estado: factura.estado,
      fechaVenta: factura.fechaVenta,
      fechaEntrega: factura.fechaEntrega,
      direccionEntrega: factura.direccionEntrega,
      total: Number(factura.total),
      cliente: factura.cliente,
      detallesDeFacturas: factura.detallesDeFactura,
      formaDePago: factura.formasDePago,
    }
    return this.http.post<Response>(this.urbBase + "/save", body, this.header)
      .pipe(
        tap(_ => console.log("Datos enviados")),
      )
  }

  findAll(): Observable<Response> {
    return this.http.get<Response>(this.urbBase + "/findAll");
  }

  delete(id: any): Observable<Response> {
    return this.http.delete<Response>(this.urbBase + "/delete/" + id);
  }

  update(factura: any): Observable<Response> {
    const body = {
      id: Number(factura.id),
      estado: factura.estado,
      fechaVenta: factura.fechaVenta,
      fechaEntrega: factura.fechaEntrega,
      direccionEntrega: factura.direccionEntrega,
      total: factura.total,
      cliente: factura.cliente,
      detallesDeFactura: factura.detallesDeFactura,
      formasDepago: factura.formasDepago,
    }
    return this.http.put<Response>(this.urbBase + "/update/" + factura.id, body);
  }
}
