import { Component, OnInit } from '@angular/core';
import { SinhVienService } from 'src/app/core/service/sinh-vien.service';

@Component({
  selector: 'app-danh-sach-sinh-vien',
  templateUrl: './danh-sach-sinh-vien.component.html',
  styleUrls: ['./danh-sach-sinh-vien.component.scss']
})
export class DanhSachSinhVienComponent implements OnInit {
  constructor(private sinhVien: SinhVienService) { }
  danhSachSinhVien: any[];
  search: string;

  ngOnInit(): void {
    this.sinhVien.laySinhVien().subscribe(rs => {
      this.danhSachSinhVien = rs;
      console.log(this.danhSachSinhVien);
    });
  }

  delete(id) {

    this.sinhVien.deleteSV(id).subscribe();
   
    for (let i = 0; i < this.danhSachSinhVien.length; ++i) {
      if (this.danhSachSinhVien[i].id === id) {
        this.danhSachSinhVien.splice(i, 1);
      }
    }

  }
}
