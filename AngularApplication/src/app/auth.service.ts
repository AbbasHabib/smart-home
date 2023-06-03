import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserLoginData } from './login-form/user-login.model';
import { JwtService } from './jwt.service';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private jwtService : JwtService) { }

  private isAuthenticated : boolean = false;

  login(userLoginData : UserLoginData) : void{
      // const { firstName, lastName, email, phoneNo, pass } = userData;
      console.log(userLoginData)
      this.http.post('http://localhost:3000/login', userLoginData).subscribe(
        {
          next: (v : any) => {
            this.jwtService.storeJwt(v['token']);
            this.isAuthenticated = true;
          },
          error: (e) => {
            console.error(e)
            this.isAuthenticated = false;
          },
          complete: () => console.info('complete') 
        }
      );
    
    console.log("authenticated" + this.isAuthenticated)
  }

  logout() {
    // Perform logout logic (e.g., clear session, remove tokens)
    // Set isAuthenticated to false
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
