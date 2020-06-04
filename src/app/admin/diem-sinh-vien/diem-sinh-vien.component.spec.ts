import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiemSinhVienComponent } from './diem-sinh-vien.component';

describe('DiemSinhVienComponent', () => {
  let component: DiemSinhVienComponent;
  let fixture: ComponentFixture<DiemSinhVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiemSinhVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiemSinhVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
