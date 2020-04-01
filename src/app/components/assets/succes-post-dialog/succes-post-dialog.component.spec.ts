import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesPostDialogComponent } from './succes-post-dialog.component';

describe('SuccesPostDialogComponent', () => {
  let component: SuccesPostDialogComponent;
  let fixture: ComponentFixture<SuccesPostDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesPostDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesPostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
