import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from './signup-form/user-signup.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  sendRequest(userData : UserData): void {
    // const { firstName, lastName, email, phoneNo, pass } = userData;
    console.log(userData)
    this.http.post('http://localhost:3000/register', userData).subscribe(
      {
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
      }
    );
  }
}
