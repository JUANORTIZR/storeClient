import { Component } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StoreClient';
  currentRoute: string;
  login = false;
  constructor(private router: Router) {
    this.currentRoute = "login";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if(this.currentRoute == "/"){
          this.login = true;
        }else{
          this.login = false;
        }

      }

    });

  }
}
