import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  storeJwt(jwt: string): void {
    localStorage.setItem('jwt', jwt);
  }

  getJwt(): string {
    return localStorage.getItem('jwt') || ''
  }
}
