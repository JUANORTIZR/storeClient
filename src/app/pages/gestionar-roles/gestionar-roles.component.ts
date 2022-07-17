import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-gestionar-roles',
  templateUrl: './gestionar-roles.component.html',
  styleUrls: ['./gestionar-roles.component.css']
})
export class GestionarRolesComponent implements OnInit {

  editarMode = false;
  rol = new Rol();
  roles:Rol[] = [];
  constructor(private rolService:RolService) { }

  ngOnInit(): void {
    this.consultarRoles();
  }

  guardar(){
    this.rolService.post(this.rol).subscribe(data => {
      alert(data.message)
      this.consultarRoles();
    })
  }

  editar(rol:Rol){
    this.rol = rol;
    this.editarMode = true;
  }

  consultarRoles(){
    this.rolService.findAll().subscribe(data => {
      this.roles = [...data.object]
    })
  }

  eliminar(id:any){
    this.rolService.delete(id).subscribe(data => {
      alert(data.message)
      this.consultarRoles();
    })

  }

  actualizar(){
    this.rolService.update(this.rol).subscribe(data => {
      alert(data.message)
      this.consultarRoles();
    })

    this.rol = new Rol();
    this.editarMode = false;
  }
}
