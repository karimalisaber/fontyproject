import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieveOrderComponent } from './recieve-order.component';

describe('RecieveOrderComponent', () => {
  let component: RecieveOrderComponent;
  let fixture: ComponentFixture<RecieveOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecieveOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieveOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
