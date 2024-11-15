import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full'},
  // { path: '', redirectTo:'login', pathMatch: 'full'},
  // { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  // { path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) }

  { path: 'auth', loadChildren: () => import('../../projects/auth/src/public-api').then(m => m.AuthModule) },
  // { path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) }
];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}