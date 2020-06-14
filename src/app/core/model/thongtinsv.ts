export class Thongtinsv {
  [x: string]: any;
  maSV: string;
  tenSV: string;
  queQuan: string;
  diaChiThuongTru: string;
  noiSinh: string;
  gioiTinh: string;
  soDienThoai: string;

  constructor(
      maSV?: string,
      tenSV?: string,
      queQuan?: string,
      diaChiThuongTru?: string,
      noiSinh?: string,
      gioiTinh?: string,
      soDienThoai?: string,
  ) {
      this.maSV = maSV;
      this.tenSV = tenSV;
      this.queQuan = queQuan;
      this.diaChiThuongTru = diaChiThuongTru;
      this.noiSinh = noiSinh;
      this.gioiTinh = gioiTinh;
      this.soDienThoai = soDienThoai;
  }
}
