import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { SignupComponent } from './signup/signup.component';
import { StorePreferenceComponent } from './store-preference/store-preference.component';


@NgModule({
  declarations: [
    SignupComponent,
    StorePreferenceComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
