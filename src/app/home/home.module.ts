import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';



@NgModule({
  declarations: [HomeComponent, LoginComponent, HeaderComponent, FooterComponent, TrangChuComponent],
  imports: [
    CommonModule, HomeRoutingModule, FormsModule, MaterialModule
  ]
})
export class HomeModule { }
