import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
 
// const routes: Routes = [];
const routes: Routes = [
  // {path : 'card', component : VideoCardComponent},
  {path : 'signup', component : SignupComponent},
  {path : '', component : LoginComponent},
  {path : 'home', component : HomeComponent},
  {path : 'list', component : ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
