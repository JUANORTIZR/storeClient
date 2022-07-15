import { Producto } from "./producto";

export class DetalleDeFactura{
  id:number = 0;
  cantidad:number = 0;
  precioUnitario:number = 0;
  iva:number = 0;
  total:number = 0;
  producto:Producto = new Producto();
}
