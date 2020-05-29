import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,HomeRoutingModule,FormsModule,MaterialModule
  ]
})
export class HomeModule { }
