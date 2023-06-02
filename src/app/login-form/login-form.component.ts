import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  onSubmitForm(formData: any) {
    console.log(formData); // You can access the form data here
    // Perform any additional operations with the form data
  }
}
