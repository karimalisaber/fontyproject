import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesSettingsComponent } from './branches-settings.component';

describe('BranchesSettingsComponent', () => {
  let component: BranchesSettingsComponent;
  let fixture: ComponentFixture<BranchesSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchesSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
