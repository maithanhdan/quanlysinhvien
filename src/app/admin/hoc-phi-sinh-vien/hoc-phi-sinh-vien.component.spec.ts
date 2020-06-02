import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocPhiSinhVienComponent } from './hoc-phi-sinh-vien.component';

describe('HocPhiSinhVienComponent', () => {
  let component: HocPhiSinhVienComponent;
  let fixture: ComponentFixture<HocPhiSinhVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocPhiSinhVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocPhiSinhVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
