import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SinhVienService {
  constructor(private api: ApiService, private http: HttpClient) { }

  public laySinhVien(): Observable<any> {
    return this.api.get('QuanLySinhVien/LayDanhSachSinhVien');
  }
  public thongTinSV(): Observable<any> {
    return this.api.get('thongTinSV');
  }

  public deleteSV(id: any): Observable<any> {
    return this.api.delete(`QuanLySinhVien/LayDanhSachSinhVien/${id}`);
  }
}
