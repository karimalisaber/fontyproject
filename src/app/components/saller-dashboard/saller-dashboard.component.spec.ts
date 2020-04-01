import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SallerDashboardComponent } from './saller-dashboard.component';

describe('SallerDashboardComponent', () => {
  let component: SallerDashboardComponent;
  let fixture: ComponentFixture<SallerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SallerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SallerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
