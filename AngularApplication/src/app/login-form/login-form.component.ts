import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserLoginData } from './user-login.model';
import { JwtService } from '../jwt.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  constructor(private authService: AuthService) {}

  onSubmitForm(userLoginData: UserLoginData) {
    console.log(userLoginData);

    if (!this.isEmailValid(userLoginData.email)) {
      alert('Please enter a valid email.');
      return;
    }

    this.authService.login(userLoginData);


  }

  isEmailValid(email : string): boolean {
    // Use Angular's built-in email validator
    return /\S+@\S+\.\S+/.test(email);
  }
}
