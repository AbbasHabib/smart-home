import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthService } from './auth.service';
import { RegisterService } from './register.service';
import { AddDeviceComponent } from './add-device/add-device.component';
import { RemoveDeviceComponent } from './remove-device/remove-device.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    NotFoundComponent,
    WelcomePageComponent,
    NavBarComponent,
    AddDeviceComponent,
    RemoveDeviceComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: WelcomePageComponent },
      { path: 'home', component: WelcomePageComponent },
      { path: 'signIn', component: LoginFormComponent },
      { path: 'signUp', component: SignupFormComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'addDevice', component: AddDeviceComponent },
      { path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [
    AuthService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
