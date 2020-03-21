import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsCategoriesComponent } from './view-products-categories.component';

describe('ViewProductsCategoriesComponent', () => {
  let component: ViewProductsCategoriesComponent;
  let fixture: ComponentFixture<ViewProductsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
