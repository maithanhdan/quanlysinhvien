import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SinhVienService {
  constructor(private api: ApiService, private http: HttpClient) {}

  public laySinhVien(): Observable<any> {
    return this.api.get('sinhVien');
  }
  public thongTinSV(): Observable<any> {
    return this.api.get('thongTinSV');
  }

  public deleteSV(maSV: any): Observable<any> {
    return this.api.delete('sinhVien/' + maSV);
  }

  // deleteSinhVien(id): Observable<any> {
  //   return this.http.delete('http://localhost:3000/sinhVien/' + id).map(res => {
  //     return res.json();
  //   });
  // }
}
