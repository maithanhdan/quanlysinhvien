import { Component, OnInit } from '@angular/core';
import { SinhVienService } from 'src/app/core/service/sinh-vien.service';

@Component({
  selector: 'app-diem-sinh-vien',
  templateUrl: './diem-sinh-vien.component.html',
  styleUrls: ['./diem-sinh-vien.component.scss']
})
export class DiemSinhVienComponent implements OnInit {

  constructor(private sinhVien :SinhVienService) { }

  thongTinSinhVien:any[];
  search: string;
  startPageNumber = 0;
  endPageNumber = 10;

  getArrayFromNumber(length) {
    return new Array(Math.ceil(length / 10));
  }

  updatePageNumber(pageNum) {
    this.startPageNumber = pageNum * 10;
    this.endPageNumber = this.startPageNumber + 10;
  }

  ngOnInit(): void {
    this.sinhVien.layDanhSachSinhVien().subscribe(rs => {
      this.thongTinSinhVien = rs;
      console.log(this.thongTinSinhVien);
    });
  }
}
