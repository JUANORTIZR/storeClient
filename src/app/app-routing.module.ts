import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { GenerarVentaComponent } from './pages/generar-venta/generar-venta.component';
import { GestionClienteComponent } from './pages/gestion-cliente/gestion-cliente.component';
import { GestionarFormasDePagoComponent } from './pages/gestionar-formas-de-pago/gestionar-formas-de-pago.component';
import { GestionarRolesComponent } from './pages/gestionar-roles/gestionar-roles.component';
import { HistorialVentasComponent } from './pages/historial-ventas/historial-ventas.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: "generarVenta",
    component: GenerarVentaComponent,
  },
  {
    path: "crearProduto",
    component: CrearProductoComponent,
  },
  {
    path: "gestioCliente",
    component: GestionClienteComponent,
  },
  {
    path:"gestionRoles",
    component: GestionarRolesComponent
  },
  {
    path:"formaDePago",
    component: GestionarFormasDePagoComponent
  },
  {
    path:"historialVentas",
    component: HistorialVentasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
