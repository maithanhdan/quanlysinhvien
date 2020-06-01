import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { DanhSachSinhVienComponent } from './danh-sach-sinh-vien/danh-sach-sinh-vien.component';
import { ViewRoutingModule } from './view-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { QuanLyDiemComponent } from './quan-ly-diem/quan-ly-diem.component';
import { QuanLyHocPhiComponent } from './quan-ly-hoc-phi/quan-ly-hoc-phi.component';

@NgModule({
  declarations: [ViewComponent, DanhSachSinhVienComponent, QuanLyDiemComponent, QuanLyHocPhiComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,MaterialModule
  ],
  exports: [ViewComponent]
})
export class ViewModule { }
