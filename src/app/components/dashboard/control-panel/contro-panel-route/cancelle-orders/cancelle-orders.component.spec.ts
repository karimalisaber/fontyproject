import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelleOrdersComponent } from './cancelle-orders.component';

describe('CancelleOrdersComponent', () => {
  let component: CancelleOrdersComponent;
  let fixture: ComponentFixture<CancelleOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelleOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelleOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
