import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  producto!: Producto;
  productos: Producto[] = [];
  editarMode: boolean = false;
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.producto = new Producto();
    this.consultarProductos();
  }

  guardar() {
    this.productoService.post(this.producto).subscribe(data => {
      alert(data.message)
      this.consultarProductos();
    });
  }

  consultarProductos(){
    this.productoService.findAll().subscribe(data => {
      this.productos = [...data.object];
    })
  }

  eliminar(id:any){
    this.productoService.delete(id).subscribe(data => {
      alert(data.message)
      this.consultarProductos();
    })
  }

  editar(producto:any){
    this.producto = producto;
    this.editarMode = true;
  }
  actualizar(){
    this.productoService.update(this.producto).subscribe(data => {
      alert(data.message)
    })
    this.producto = new Producto();
    this.editarMode = false;
  }

}
