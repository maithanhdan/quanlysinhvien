import { Component, OnInit, ViewChild } from '@angular/core';
import { SinhVienService } from 'src/app/core/service/sinh-vien.service';
import { DiemSV } from 'src/app/core/model/diem-sv';
import swal from 'sweetalert2';

@Component({
  selector: 'app-hoc-phi-sinh-vien',
  templateUrl: './hoc-phi-sinh-vien.component.html',
  styleUrls: ['./hoc-phi-sinh-vien.component.scss']
})
export class HocPhiSinhVienComponent implements OnInit {

  @ViewChild('closebutton') closebutton;
  @ViewChild('closeupdate') closeupdate;
  constructor(private sinhVienService: SinhVienService) {}
  DiemSV: DiemSV = {
    maSV: '',
    tenSV: '',
    diemTB: '',
    diemRenLuyen: '',
    xepLoai: '',
  };
  danhSachDiemSinhVien: any[];
  search: string;
  startPageNumber = 0;
  endPageNumber = 10;

  ngOnInit(): void {
    this.sinhVienService.LayDiemSV().subscribe((rs) => {
      this.danhSachDiemSinhVien = rs;
      console.log(this.danhSachDiemSinhVien);
    });
  }

  delete(id) {
    this.sinhVienService.deleteDiemSV(id).subscribe();
    for (let i = 0; i < this.danhSachDiemSinhVien.length; ++i) {
      if (this.danhSachDiemSinhVien[i].id === id) {
        this.danhSachDiemSinhVien.splice(i, 1);
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

  form: DiemSV = new DiemSV();
  onSubmit() {
    this.closebutton.nativeElement.click();
    this.sinhVienService.themDiemSinhVien(this.form).subscribe();
    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bạn đã thêm thành công',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  edit(maSV) {
    this.DiemSV = {
      ...this.danhSachDiemSinhVien.find((res) => {
        return res.maSV === maSV;
      }),
    };
  }
  updateSV() {
    this.closeupdate.nativeElement.click();
    this.sinhVienService.updateDiemSV(this.DiemSV.id, this.DiemSV).subscribe();
    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bạn đã sửa thành công',
      showConfirmButton: false,
      timer: 1500,
    });
  }

}
