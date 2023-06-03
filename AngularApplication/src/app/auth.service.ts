import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated : boolean = false;

  login() {
    // Perform login logic (e.g., make an API call, check credentials)
    // If login is successful, set isAuthenticated to true
    this.isAuthenticated = true;
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
