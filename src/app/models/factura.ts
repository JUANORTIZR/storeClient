import { Cliente } from "./cliente";
import { DetalleDeFactura } from "./DetalleDeFactura";
import { FormaDePago } from "./formaDePago";

export class Factura{
  id:number = 0;
  estado:string = "Vigente";
  fechaVenta:Date = new Date();
  fechaEntrega:Date = new Date();
  direccionEntrega:string = "";
  total:number = 0;
  cliente:Cliente = new Cliente();
  detallesDeFactura:DetalleDeFactura[] = [];
  formasDePago:FormaDePago[] = [];
}
