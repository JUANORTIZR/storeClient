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

  post(factura: Factura): Observable<Response> {
    const body = {
      id: Number(factura.id),
      estado: factura.estado,
      fechaVenta: factura.fechaVenta,
      fechaEntrega: factura.fechaEntrega,
      direccionEntrega: factura.direccionEntrega,
      total: Number(factura.total),
      cliente: factura.cliente.identificacion,
      detallesDeFacturas: factura.detallesDeFactura,
      formaDePago: factura.formasDePago,
    }
    return this.http.post<Response>(this.urbBase + "/save", body,this.getHeader())
      .pipe(
        tap(_ => console.log("Datos enviados")),
      )
  }

  findAll(): Observable<Response> {
    return this.http.get<Response>(this.urbBase + "/findAll",this.getHeader());
  }

  delete(id: any): Observable<Response> {
    return this.http.delete<Response>(this.urbBase + "/delete/" + id,this.getHeader());
  }

  put(id:any, factura:Factura): Observable<Response>{
    const body = {
      id: Number(factura.id),
      estado: factura.estado,
      fechaVenta: factura.fechaVenta,
      fechaEntrega: factura.fechaEntrega,
      direccionEntrega: factura.direccionEntrega,
      total: Number(factura.total),
      cliente: factura.cliente.identificacion,
      detallesDeFacturas: factura.detallesDeFactura,
      formaDePago: factura.formasDePago,
    }
    return this.http.put<Response>(this.urbBase+"/update"+id,body, this.getHeader())
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
    return this.http.put<Response>(this.urbBase + "/update/" + factura.id, body,this.getHeader());
  }
}
