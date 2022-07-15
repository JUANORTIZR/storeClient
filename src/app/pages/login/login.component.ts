import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:string = ''
  clave:string = ''
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.usuario, this.clave).subscribe(data => {
      if(data.object!="Datos incorrectos"){
        localStorage.setItem('token', JSON.stringify(data.object));
        this.router.navigate(['/inicio']);
      }else{
        alert(data.object)
      }

    })

  }


}
