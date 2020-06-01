import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyDiemComponent } from './quan-ly-diem.component';

describe('QuanLyDiemComponent', () => {
  let component: QuanLyDiemComponent;
  let fixture: ComponentFixture<QuanLyDiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyDiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyDiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
