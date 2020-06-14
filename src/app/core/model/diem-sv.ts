export class DiemSV {
  [x: string]: any;
  maSV: string;
  tenSV: string;
  diemTB: string;
  diemRenLuyen: string;
  xepLoai: string;

  constructor(
      maSV?: string,
      tenSV?: string,
      diemTB?: string,
      diemRenLuyen?: string,
      xepLoai?: string,
  ) {
      this.maSV = maSV;
      this.tenSV = tenSV;
      this.diemTB = diemTB;
      this.diemRenLuyen = diemRenLuyen;
      this.xepLoai = xepLoai;
  }
}
