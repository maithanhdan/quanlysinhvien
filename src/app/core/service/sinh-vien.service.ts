import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Sinhvien } from '../model/sinhvien';
import { Thongtinsv } from "../model/thongtinsv";
import { DiemSV } from '../model/diem-sv';

@Injectable({
  providedIn: 'root'
})
export class SinhVienService {
  constructor(private api: ApiService, private http: HttpClient) { }

  //danh sach sinh vien api
  public layDanhSachSinhVien(): Observable<any> {
    return this.api.get('QuanLySinhVien/LayDanhSachSinhVien');
  }

  public updateSV(id: any, values: Sinhvien): Observable<any> {
    return this.api.put(`QuanLySinhVien/LayDanhSachSinhVien/${id}`, values);
  }

  public themThongTinSV(values: Sinhvien): Observable<any> {
    return this.api.post('QuanLySinhVien/LayDanhSachSinhVien', values);
  }

  public deleteSV(id: any): Observable<any> {
    return this.api.delete(`QuanLySinhVien/LayDanhSachSinhVien/${id}`);
  }

//thong tinh sinh vien api
  public LayThongTinSinhVien(): Observable<any> {
    return this.api.get('QuanLySinhVien/LayThongTinSinhVien');
  }

  public updateTTSV(id: any, values: Thongtinsv): Observable<any> {
    return this.api.put(`QuanLySinhVien/LayThongTinSinhVien/${id}`, values);
  }

  public themThongTinTTSV(values: Thongtinsv): Observable<any> {
    return this.api.post('QuanLySinhVien/LayThongTinSinhVien', values);
  }

  public deleteTTSV(id: any): Observable<any> {
    return this.api.delete(`QuanLySinhVien/LayThongTinSinhVien/${id}`);
  }


//diem sinh vien api
public LayDiemSV(): Observable<any> {
  return this.api.get('QuanLySinhVien/LayDiemSinhVien');
}

public updateDiemSV(id: any, values: DiemSV): Observable<any> {
  return this.api.put(`QuanLySinhVien/LayDiemSinhVien/${id}`, values);
}

public themDiemSinhVien(values: DiemSV): Observable<any> {
  return this.api.post('QuanLySinhVien/LayDiemSinhVien', values);
}

public deleteDiemSV(id: any): Observable<any> {
  return this.api.delete(`QuanLySinhVien/LayDiemSinhVien/${id}`);
}
}
