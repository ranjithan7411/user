import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { AddempComponent } from './addemp/addemp.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { DeleteempComponent } from './deleteemp/deleteemp.component';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"admin",component:AdminComponent},
  {path:"user",component:UserComponent},
  {path:"register",component:RegisterComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"home",component:HomeComponent},
  {path:"viewstudent",component:ViewstudentComponent},
  {path:"addstudent",component:AddstudentComponent},
  {path:"updatestudent",component:UpdatestudentComponent},
  {path:"deletestudent",component:DeletestudentComponent},
  {path:"viewemp",component:ViewempComponent},
  {path:"addemp",component:AddempComponent},
  {path:"updateemp",component:UpdateempComponent},
  {path:"deleteemp",component:DeleteempComponent},
  {path:"studentupdate",component:StudentupdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }