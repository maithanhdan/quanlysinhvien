import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoaHocCongNgheComponent } from './khoa-hoc-cong-nghe.component';

describe('KhoaHocCongNgheComponent', () => {
  let component: KhoaHocCongNgheComponent;
  let fixture: ComponentFixture<KhoaHocCongNgheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhoaHocCongNgheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhoaHocCongNgheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
