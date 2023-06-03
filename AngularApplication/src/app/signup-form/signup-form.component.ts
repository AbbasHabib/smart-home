import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../register.service';
import { UserData } from './user-signup.model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  constructor(private registerService : RegisterService){}
  
  onSubmitForm(formData: any) {

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNo || !formData.pass) {
      // At least one of the required fields is empty
      alert('Please fill in all required fields.');
      return; // Prevent form submission
    }

    if (!this.isEmailValid(formData.email)) {
      alert('Please enter a valid email.');
      return; // Prevent form submission
    }

    this.registerService.sendRequest(formData)
    console.log(formData);
  }

  isEmailValid(email : string): boolean {
    // Use Angular's built-in email validator
    return /\S+@\S+\.\S+/.test(email);
  }
}
