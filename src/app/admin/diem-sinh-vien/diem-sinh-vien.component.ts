import { Component, OnInit } from '@angular/core';
import { SinhVienService } from 'src/app/core/service/sinh-vien.service';

@Component({
  selector: 'app-diem-sinh-vien',
  templateUrl: './diem-sinh-vien.component.html',
  styleUrls: ['./diem-sinh-vien.component.scss']
})
export class DiemSinhVienComponent implements OnInit {

  constructor(private sinhVien :SinhVienService) { }


  ThongTinSinhVien:any[];
  search: string;
  ngOnInit(): void {
    this.sinhVien.thongTinSV().subscribe(rs=>{
      this.ThongTinSinhVien=rs
      console.log(this.ThongTinSinhVien);
    })
  }
}
