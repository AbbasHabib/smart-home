import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    NotFoundComponent,
    WelcomePageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: WelcomePageComponent },
      { path: 'home', component: WelcomePageComponent },
      { path: 'signIn', component: LoginFormComponent },
      { path: 'signUp', component: SignupFormComponent },
      { path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
