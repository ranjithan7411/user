import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ReactiveFormsModule} from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComponentComponent } from './component/component.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { AddempComponent } from './addemp/addemp.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { DeleteempComponent } from './deleteemp/deleteemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';

    



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    RegisterComponent,
    NavbarComponent,
    ComponentComponent,
    HomeComponent,
    ViewstudentComponent,
    AddstudentComponent,
    UpdatestudentComponent,
    DeletestudentComponent,
    AddempComponent,
    UpdateempComponent,
    DeleteempComponent,
    ViewempComponent,
    StudentupdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }