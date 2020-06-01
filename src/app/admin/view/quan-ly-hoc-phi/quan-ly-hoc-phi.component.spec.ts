import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyHocPhiComponent } from './quan-ly-hoc-phi.component';

describe('QuanLyHocPhiComponent', () => {
  let component: QuanLyHocPhiComponent;
  let fixture: ComponentFixture<QuanLyHocPhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyHocPhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyHocPhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
