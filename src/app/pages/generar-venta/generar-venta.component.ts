import { Component, OnInit } from '@angular/core';
import { DetalleDeFactura } from 'src/app/models/DetalleDeFactura';
import { Factura } from 'src/app/models/factura';
import { FormaDePago } from 'src/app/models/formaDePago';
import { Producto } from 'src/app/models/producto';
import { ClienteService } from 'src/app/services/cliente.service';
import { FacturaService } from 'src/app/services/factura.service';
import { FormaDePagoService } from 'src/app/services/forma-de-pago.service';
import { ProductoService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-generar-venta',
  templateUrl: './generar-venta.component.html',
  styleUrls: ['./generar-venta.component.css']
})
export class GenerarVentaComponent implements OnInit {

  factura: Factura = new Factura();
  formasDePago: FormaDePago[] = [];
  productos: Producto[] = [];
  cantidad: number = 0;
  productoSeleccionado!: Producto;
  listaFormas:FormaDePago[] = [];
  constructor(private formaDePagoService: FormaDePagoService, private clienteService: ClienteService,
    private productoService: ProductoService, private facturaService: FacturaService
  ) { }

  ngOnInit(): void {
    this.consultarFormasDePago();
    this.consultarProductos();
  }

  consultarFormasDePago() {
    this.formaDePagoService.findAll().subscribe(data => {
      this.formasDePago = [...data.object]
    })
  }

  getDireccionEntrega(event: any) {
    let direccion = event.target.value;
    console.log(direccion);
  }

  consultarCliente() {
    this.clienteService.findById(this.factura.cliente.identificacion).subscribe(data => {
      this.factura.cliente = data.object;
    })
  }

  consultarProductos() {
    this.productoService.findAll().subscribe(data => {
      this.productos = [...data.object];
    })
  }

  agregarCarrito() {
    let detalleDeFactura = new DetalleDeFactura();
    detalleDeFactura.cantidad = this.cantidad;
    detalleDeFactura.producto = this.productoSeleccionado;
    detalleDeFactura.precioUnitario = this.productoSeleccionado.precioUnitario;
    detalleDeFactura.total = detalleDeFactura.cantidad * this.productoSeleccionado.precioUnitario;
    detalleDeFactura.iva = this.productoSeleccionado.iva;
    this.factura.detallesDeFactura.push(detalleDeFactura);
    this.factura.total = this.calcularTotal();
  }

  calcularTotal() {
    let total = 0;
    this.factura.detallesDeFactura.forEach(item => {
      total += item.total;
    })
    return total;
  }

  getProducto(data: any) {
    this.productoSeleccionado = data.target.value;
    alert(this.productoSeleccionado)
  }

  eliminar(i: any) {
    this.factura.detallesDeFactura.splice(i,1)

  }

  generarVenta(){
    this.factura.fechaVenta = new Date();
    const formas = this.listaFormas;
    this.factura.formasDePago = formas;

    this.facturaService.post(this.factura).subscribe(data => {
      alert(data.message)
    })
    this.factura = new Factura();
  }

}
