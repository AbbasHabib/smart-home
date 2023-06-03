import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private authService: AuthService) {}

  isAuthenticated() : boolean{
    console.log(this.authService.isAuthenticatedUser());
    return this.authService.isAuthenticatedUser();
    // return false;
  }

  logout(){
    this.authService.logout();
  }
}
