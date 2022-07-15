import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = ''
  clave: string = ''

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {

  }

  login() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuarioActivo');
    this.loginService.login(this.usuario, this.clave).subscribe(data => {
      if (data.message != "Datos incorrectos") {
        localStorage.setItem('token', data.message);
        localStorage.setItem('usuarioActivo', JSON.stringify(data.object))
        this.router.navigate(['/inicio']);
      } else {
        alert(data.message)
      }

    })

  }


}
