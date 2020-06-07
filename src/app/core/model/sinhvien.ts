export class Sinhvien {
    maSV: string;
    tenSV: string;
    tenNganh: string;
    tenLop: string;
    khoaHoc: string;


    constructor(
        maSV?: string,
        tenSV?: string,
        tenNganh?: string,
        tenLop?: string,
        khoaHoc?: string,
    ) {
        this.maSV = maSV;
        this.tenSV = tenSV;
        this.tenNganh = tenNganh;
        this.tenLop = tenLop;
        this.khoaHoc = khoaHoc;
    }
}
