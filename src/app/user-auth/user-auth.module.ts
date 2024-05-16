import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { UserAuthRoutingModule } from './user-auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent 
  ]
})
export class UserAuthModule { }
