import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDSSV'
})
export class SearchDSSVPipe implements PipeTransform {

  transform(ThongTinSinhVien: any[], search: string) {
    if (search == null) {
      return ThongTinSinhVien;
    }
    return ThongTinSinhVien.filter(
      ele =>
        ele.maSV.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  }

}
