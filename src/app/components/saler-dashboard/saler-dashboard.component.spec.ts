import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalerDashboardComponent } from './saler-dashboard.component';

describe('SalerDashboardComponent', () => {
  let component: SalerDashboardComponent;
  let fixture: ComponentFixture<SalerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
