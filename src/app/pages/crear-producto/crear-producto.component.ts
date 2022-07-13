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
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.producto = new Producto();
  }

  guardar(){
    this.productoService.post(this.producto).subscribe(data => console.log(data));
  }

}
