import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

export class Ruta {
  ruta: string = "";
  titulo: string = "";
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StoreClient';
  currentRoute: string;
  login = false;
  usuarioActivo: any;
  rutas: Ruta[] = [];
  constructor(private router: Router) {
    this.currentRoute = "login";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if (this.currentRoute == "/") {
          this.login = true;
        } else {
          this.login = false;
        }

      }

    });

  }

  ngOnInit(): void {
    this.usuarioActivo = JSON.parse(this.getLocal());
    if (this.usuarioActivo == undefined) {
      this.router.navigate(['/']);
    }
    this.rutas = this.getRutas();
  }

  getLocal(): string {
    var storage = localStorage.getItem('usuarioActivo');
    if (storage == null) {
      return "";
    }
    return storage;
  }


  getRutas(): Ruta[] {

    var lista = [{ titulo: "Inici", ruta: "/inicio" }];
    console.log(this.usuarioActivo.roles);

    for (let index = 0; index < this.usuarioActivo.roles.length; index++) {
      const element = this.usuarioActivo.roles[index];
      if (element.nombre == "Administrador Sistema") {
        return lista = [
          { titulo: "Ventas", ruta: "/generarVenta" }, { titulo: "Productos", ruta: "/crearProduto", }, { titulo: "Clientes", ruta: "/gestioCliente", },
          { titulo: "Roles", ruta: "/gestionRoles" }, { titulo: "Formas de pago", ruta: "/formaDePago", }, { titulo: "Historial de ventas", ruta: "/historialVentas", }
        ];
      }

    }

    for (let index = 0; index < this.usuarioActivo.roles.length; index++) {
      const element = this.usuarioActivo.roles[index];
      if (element.nombre == "Vendedor") {
        return lista = [
          { titulo: "Ventas", ruta: "/generarVenta" }, { titulo: "Clientes", ruta: "/gestioCliente", },
          { titulo: "Historial de ventas", ruta: "/historialVentas", }
        ];
      }

    }

    for (let index = 0; index < this.usuarioActivo.roles.length; index++) {
      const element = this.usuarioActivo.roles[index];

      if (element.nombre == "Administrador de tienda") {
        return lista = [
          { titulo: "Ventas", ruta: "/generarVenta" }, { titulo: "Productos", ruta: "/crearProduto", }, { titulo: "Clientes", ruta: "/gestioCliente", },
          { titulo: "Formas de pago", ruta: "/formaDePago", }, { titulo: "Historial de ventas", ruta: "/historialVentas", }
        ];
      }

    }

    return lista;
  }

  cerrarSesion(){
    this.login = true;
    localStorage.removeItem('token')
    localStorage.removeItem('usuarioActivo')
    setTimeout(() =>10000);
    this.router.navigate(['/']);

  }
}
