import { Component, OnInit, ViewChild } from '@angular/core';
import { SinhVienService } from 'src/app/core/service/sinh-vien.service';
import { Sinhvien } from 'src/app/core/model/sinhvien';
import swal from 'sweetalert2';

@Component({
  selector: 'app-danh-sach-sinh-vien',
  templateUrl: './danh-sach-sinh-vien.component.html',
  styleUrls: ['./danh-sach-sinh-vien.component.scss'],
})
export class DanhSachSinhVienComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  @ViewChild('closeupdate') closeupdate;
  constructor(private sinhVienService: SinhVienService) {}
  sinhVien: Sinhvien = {
    maSV: '',
    tenSV: '',
    tenNganh: '',
    tenLop: '',
    khoaHoc: '',
  };
  danhSachSinhVien: any[];
  search: string;
  startPageNumber = 0;
  endPageNumber = 10;

  ngOnInit(): void {
    this.sinhVienService.layDanhSachSinhVien().subscribe((rs) => {
      this.danhSachSinhVien = rs;
      console.log(this.danhSachSinhVien);
    });
  }

  delete(id) {
    this.sinhVienService.deleteSV(id).subscribe();
    for (let i = 0; i < this.danhSachSinhVien.length; ++i) {
      if (this.danhSachSinhVien[i].id === id) {
        this.danhSachSinhVien.splice(i, 1);
      }
    }
  }



  getArrayFromNumber(length) {
    return new Array(Math.ceil(length / 10));
  }

  updatePageNumber(pageNum) {
    this.startPageNumber = pageNum * 10;
    this.endPageNumber = this.startPageNumber + 10;
  }

  form: Sinhvien = new Sinhvien();
  onSubmit() {
    this.closebutton.nativeElement.click();
    this.sinhVienService.themThongTinSV(this.form).subscribe();
    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bạn đã thêm thành công',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  edit(maSV) {
    this.sinhVien = {
      ...this.danhSachSinhVien.find((res) => {
        return res.maSV === maSV;
      }),
    };
  }
  updateSV() {
    this.closeupdate.nativeElement.click();
    this.sinhVienService.updateSV(this.sinhVien.id, this.sinhVien).subscribe();
    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bạn đã sửa thành công',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
