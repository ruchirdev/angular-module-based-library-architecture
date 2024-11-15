import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/registration/signup/signup.component';
import { StorePreferenceComponent } from './pages/registration/store-preference/store-preference.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    StorePreferenceComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
