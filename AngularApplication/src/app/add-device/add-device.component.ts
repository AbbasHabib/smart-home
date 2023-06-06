import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtService } from '../jwt.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent {

  constructor(private http: HttpClient, private jwtService: JwtService) { }



  onSubmitForm(addDeviceForm: any) {
    const jwtToken: string = this.jwtService.getJwt();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    // const options = { headers: headers };
  
    this.http.post('http://localhost:3000/addDevice', addDeviceForm, {headers}).subscribe(
      {
        next: (v: any) => {
          console.log("added success");
        },
        error: (e: any) => {
          console.error(e)
        },
        complete: () => console.info('complete')
      }
    );
  }
}
