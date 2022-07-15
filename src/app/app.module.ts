import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GenerarVentaComponent } from './pages/generar-venta/generar-venta.component';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { GestionClienteComponent } from './pages/gestion-cliente/gestion-cliente.component';
import { GestionarRolesComponent } from './pages/gestionar-roles/gestionar-roles.component';
import { GestionarFormasDePagoComponent } from './pages/gestionar-formas-de-pago/gestionar-formas-de-pago.component';
import { HistorialVentasComponent } from './pages/historial-ventas/historial-ventas.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    GenerarVentaComponent,
    CrearProductoComponent,
    GestionClienteComponent,
    GestionarRolesComponent,
    GestionarFormasDePagoComponent,
    HistorialVentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
