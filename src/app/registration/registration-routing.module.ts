import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { StorePreferenceComponent } from './store-preference/store-preference.component';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'store-preference',
    component: StorePreferenceComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
