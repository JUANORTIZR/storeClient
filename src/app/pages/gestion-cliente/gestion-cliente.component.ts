import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { Direccion } from 'src/app/models/direccion';
import { Telefono } from 'src/app/models/telefono';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-gestion-cliente',
  templateUrl: './gestion-cliente.component.html',
  styleUrls: ['./gestion-cliente.component.css']
})
export class GestionClienteComponent implements OnInit {

  editarMode = false;
  cliente!: Cliente;

  direccion: string = "";
  telefono:string = "";
  clientes: Cliente[] = [];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.consultarCliente();
  }

  agregarDireccion(){
    let direccionn = new Direccion();
    direccionn.descripcion = this.direccion;
    this.cliente.direcciones.push(direccionn)
  }

  agregarTelefono(){
    let telefono = new Telefono();
    telefono.numero = this.telefono;
    this.cliente.telefonos.push(telefono)
  }

  guardar(){
    this.clienteService.post(this.cliente).subscribe(data =>{
      alert(data.message);
      this.consultarCliente();
    })
    this.cliente = new Cliente();
  }

  consultarCliente(){
    this.clienteService.findAll().subscribe(data =>{
      this.clientes = [...data.object];
    })
  }

  eliminar(id:any){
    this.clienteService.delete(id).subscribe(data => {
      alert(data.message)
      this.consultarCliente();
    })
  }


  editar(cliente:any){
    this.cliente = cliente;
    this.editarMode = true;
  }

  actualizar(){
    this.clienteService.update(this.cliente).subscribe(data => {
      alert(data.message)
      this.consultarCliente();
    })
    this.cliente = new Cliente();
    this.editarMode = false;
  }
}
