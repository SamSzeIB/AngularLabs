import {LoginComponent} from './login/login.component';
import {AccountComponent} from './account/account.component';
import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'login',component:LoginComponent },
  {path:'account',component:AccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
