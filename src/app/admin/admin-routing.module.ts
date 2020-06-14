import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DiemSinhVienComponent } from './diem-sinh-vien/diem-sinh-vien.component';
import { HocPhiSinhVienComponent } from './hoc-phi-sinh-vien/hoc-phi-sinh-vien.component';
import { DanhSachSinhVienComponent } from './danh-sach-sinh-vien/danh-sach-sinh-vien.component';

// component là sử dụng cho route là component
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DanhSachSinhVienComponent,
      },
      {
        path: 'thongTinSienVien',
        component: DiemSinhVienComponent,
      },
      {
        path: 'diemSinhVien',
        component: HocPhiSinhVienComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
