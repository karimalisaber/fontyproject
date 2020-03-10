import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashWrapperComponent } from './dash-wrapper.component';

describe('DashWrapperComponent', () => {
  let component: DashWrapperComponent;
  let fixture: ComponentFixture<DashWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
