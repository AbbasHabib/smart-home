import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeviceData } from './device.model';
import { Subscription, interval } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtService } from '../jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  devices: DeviceData[] = [];
  subscription!: Subscription;
  state : number = 0;
  
  constructor(private http: HttpClient, private jwtService: JwtService) { }


  handleButtonClick(device: any) {
    const jwtToken: string = this.jwtService.getJwt();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    // const options = { headers: headers };
    // const revertNumericValue = device.state ? 0 : 1;
    console.log(device)
    this.http.post('http://localhost:3000/switch/' + String(device['channel_no']) + '/' + String(this.state), device, { headers }).subscribe(
      {
        next: (v: any) => {
          // device.state = !device.state;
          this.state = (this.state === 1 ? 0 : 1)
          console.log("sent");
        },
        error: (e: any) => {
          console.error(e)
        },
        complete: () => this.updateData()
      }
    );
  }

  ngOnInit() {
    this.updateData(); // Initial call to fetch data
  }
  //   // Call the updateData() function every 2000ms
  //   this.subscription = interval(5000).subscribe(() => {
  //     this.updateData();
  //     console.log("update devices!!")
  //   });
  // }

  // ngOnDestroy() {
  //   // Unsubscribe from the interval when the component is destroyed
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }

  updateData() {
    const jwtToken: string = this.jwtService.getJwt();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    const options = { headers: headers };

    this.http.get<DeviceData[]>('http://127.0.0.1:3000/devices', options).subscribe(
      {
        next: (v: any) => {
          this.devices = v['devices'];
        },
        error: (e) => {
          console.error(e);
        },
        complete: () => console.info('complete')
      });
  }

  getDevices(updatedDevices: DeviceData[]) {
    this.devices = updatedDevices;
  }
}
