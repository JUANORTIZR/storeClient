import { Component, OnInit } from '@angular/core';
import { FormaDePago } from 'src/app/models/formaDePago';
import { FormaDePagoService } from 'src/app/services/forma-de-pago.service';

@Component({
  selector: 'app-gestionar-formas-de-pago',
  templateUrl: './gestionar-formas-de-pago.component.html',
  styleUrls: ['./gestionar-formas-de-pago.component.css']
})
export class GestionarFormasDePagoComponent implements OnInit {

  formaDePago: FormaDePago = new FormaDePago();
  editarMode = false;
  formasDepago: FormaDePago[] = [];
  constructor(private formaDePagoService: FormaDePagoService) { }

  ngOnInit(): void {
    this.consultarFormasDePago();
  }

  guardar(){

    this.formaDePagoService.post(this.formaDePago).subscribe(data => {
      alert(data.message)
      this.consultarFormasDePago();
    })
  }

  editar(rol:FormaDePago){
    this.formaDePago = rol;
    this.editarMode = true;
  }

  consultarFormasDePago(){
    this.formaDePagoService.findAll().subscribe(data => {
      this.formasDepago = [...data.object]
    })
  }

  eliminar(id:any){
    this.formaDePagoService.delete(id).subscribe(data => {
      alert(data.message)
    })
    this.consultarFormasDePago();
  }

  actualizar(){
    this.formaDePagoService.update(this.formaDePago).subscribe(data => {
      alert(data.message)
    })
    this.consultarFormasDePago();
    this.formaDePago = new FormaDePago();
    this.editarMode = false;
  }

}
