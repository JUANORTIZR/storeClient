import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-historial-ventas',
  templateUrl: './historial-ventas.component.html',
  styleUrls: ['./historial-ventas.component.css']
})
export class HistorialVentasComponent implements OnInit {

  facturas: Factura[] = [];
  constructor(private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.consultarVentas()
  }

  editar(factura: Factura){
    this.facturaService.put(factura.id, factura).subscribe(data => {
      alert(data.message);
    })
  }

  consultarVentas(){
    this.facturaService.findAll().subscribe(data => {
      this.facturas = [...data.object];
    })
  }

}
