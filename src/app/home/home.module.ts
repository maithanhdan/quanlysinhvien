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
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { GiaoDucComponent } from './giao-duc/giao-duc.component';
import { KhoaHocCongNgheComponent } from './khoa-hoc-cong-nghe/khoa-hoc-cong-nghe.component';
import { KhoaComponent } from './khoa/khoa.component';



@NgModule({
  declarations: [HomeComponent, LoginComponent, HeaderComponent, FooterComponent, TrangChuComponent, GioiThieuComponent, GiaoDucComponent, KhoaHocCongNgheComponent, KhoaComponent],
  imports: [
    CommonModule, HomeRoutingModule, FormsModule, MaterialModule
  ]
})
export class HomeModule { }
