import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTTSV'
})
export class SearchTTSVPipe implements PipeTransform {

  transform(danhSachSinhVien: any[], search: string) {
    if (search == null) {
      return danhSachSinhVien;
    }
    return danhSachSinhVien.filter(
      ele =>
        ele.maSV.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  }

}
