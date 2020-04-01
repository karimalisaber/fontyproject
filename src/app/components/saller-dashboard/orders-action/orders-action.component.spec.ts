import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersActionComponent } from './orders-action.component';

describe('OrdersActionComponent', () => {
  let component: OrdersActionComponent;
  let fixture: ComponentFixture<OrdersActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
