import { Direccion } from "./direccion";
import { Telefono } from "./telefono";

export class Cliente{
  identificacion: string = "";
  nombres: string = "";
  apellidos: string = "";
  correo: string = "";
  telefonos: Telefono[] = [];
  direcciones: Direccion[] = [];
  facturas = [];
}
