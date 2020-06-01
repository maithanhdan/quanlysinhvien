import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachSinhVienComponent } from './danh-sach-sinh-vien.component';

describe('DanhSachSinhVienComponent', () => {
  let component: DanhSachSinhVienComponent;
  let fixture: ComponentFixture<DanhSachSinhVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachSinhVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachSinhVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
