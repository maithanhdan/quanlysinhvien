import { Component, OnInit, ViewChild } from '@angular/core';
import { SinhVienService } from 'src/app/core/service/sinh-vien.service';
import { Thongtinsv } from 'src/app/core/model/thongtinsv';
import swal from 'sweetalert2';

@Component({
  selector: 'app-diem-sinh-vien',
  templateUrl: './diem-sinh-vien.component.html',
  styleUrls: ['./diem-sinh-vien.component.scss'],
})
export class DiemSinhVienComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  @ViewChild('closeupdate') closeupdate;
  constructor(private sinhVienService: SinhVienService) {}

  ttSinhVien: Thongtinsv = {
    maSV: '',
    tenSV: '',
    queQuan: '',
    diaChiThuongTru: '',
    noiSinh: '',
    gioiTinh: '',
    soDienThoai: '',
  };
  ngOnInit(): void {
    this.sinhVienService.LayThongTinSinhVien().subscribe((rs) => {
      this.thongTinSinhVien = rs;
      console.log(this.thongTinSinhVien);
    });
  }

  thongTinSinhVien: any[];
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

  delete(id) {
    this.sinhVienService.deleteTTSV(id).subscribe();
    for (let i = 0; i < this.thongTinSinhVien.length; ++i) {
      if (this.thongTinSinhVien[i].id === id) {
        this.thongTinSinhVien.splice(i, 1);
      }
    }
  }
  edit(maSV) {
    this.ttSinhVien = {
      ...this.thongTinSinhVien.find((res) => {
        return res.maSV === maSV;
      }),
    };
  }
  form: Thongtinsv = new Thongtinsv();
  onSubmit() {
    this.closebutton.nativeElement.click();
    this.sinhVienService.themThongTinTTSV(this.form).subscribe();
    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bạn đã thêm thành công',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  updateTTSV() {
    this.closeupdate.nativeElement.click();
    this.sinhVienService
      .updateTTSV(this.ttSinhVien.id, this.ttSinhVien)
      .subscribe();
    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bạn đã sửa thành công',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
