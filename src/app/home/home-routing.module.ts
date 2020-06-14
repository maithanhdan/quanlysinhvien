import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { LoginComponent } from './login/login.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { GiaoDucComponent } from './giao-duc/giao-duc.component';
import { KhoaHocCongNgheComponent } from './khoa-hoc-cong-nghe/khoa-hoc-cong-nghe.component';
import { KhoaComponent } from './khoa/khoa.component';



// component là sử dụng cho route là component
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: TrangChuComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path:'gioiThieu',
        component:GioiThieuComponent
      }, {
        path:'tinTuc',
        component:GiaoDucComponent
      }, {
        path:'suKien',
        component:KhoaHocCongNgheComponent
      }, {
        path:'khoa',
        component:KhoaComponent
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
