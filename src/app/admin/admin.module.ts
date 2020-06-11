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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SearchDSSVPipe } from './danh-sach-sinh-vien/search-dssv.pipe';
import { SearchTTSVPipe } from './diem-sinh-vien/search-ttsv.pipe';

@NgModule({
  declarations: [
    AdminComponent,
    AsidenavComponent,
    HeaderComponent,
    FooterComponent,
    DiemSinhVienComponent,
    HocPhiSinhVienComponent,
    DanhSachSinhVienComponent,
    SearchDSSVPipe,
    SearchTTSVPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class AdminModule {}
