import { Component, OnInit } from '@angular/core';
import { SinhVienService } from 'src/app/core/service/sinh-vien.service';

@Component({
  selector: 'app-danh-sach-sinh-vien',
  templateUrl: './danh-sach-sinh-vien.component.html',
  styleUrls: ['./danh-sach-sinh-vien.component.scss']
})
export class DanhSachSinhVienComponent implements OnInit {
  constructor(private sinhVien: SinhVienService) {}
  danhSachSinhVien: any[];
  search: string;

  ngOnInit(): void {
    this.sinhVien.laySinhVien().subscribe(rs => {
      this.danhSachSinhVien = rs;
      console.log(this.danhSachSinhVien);
    });
  }

  delete(maSV: String) {
    this.sinhVien.deleteSV(maSV).subscribe(rs => {
      this.danhSachSinhVien = rs;
      console.log(maSV);
    });
  }
  // delete(id) {
  //   var danhSachSinhVien = this.danhSachSinhVien; //why use it?? ..no need it

  //   this.sinhVien.deleteSV(id).subscribe(data => {
  //     if (data.n == 1) {
  //       this.danhSachSinhVien = this.danhSachSinhVien.filter(
  //         xx => xx._id != id
  //       ); // <--- so filter and RETURN ALL non matching given ID
  //     }
  //   });
  //   console.log(id);

  // }
}
