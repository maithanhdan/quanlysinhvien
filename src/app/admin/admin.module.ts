import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { AsidenavComponent } from './asidenav/asidenav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DiemSinhVienComponent } from './diem-sinh-vien/diem-sinh-vien.component';
import { HocPhiSinhVienComponent } from './hoc-phi-sinh-vien/hoc-phi-sinh-vien.component';
import { DanhSachSinhVienComponent } from './danh-sach-sinh-vien/danh-sach-sinh-vien.component';




@NgModule({
  declarations: [AdminComponent, AsidenavComponent, HeaderComponent, FooterComponent, DiemSinhVienComponent, HocPhiSinhVienComponent, DanhSachSinhVienComponent],
  imports: [
    CommonModule,MaterialModule,AdminRoutingModule,FormsModule,
  ]
})
export class AdminModule { }
