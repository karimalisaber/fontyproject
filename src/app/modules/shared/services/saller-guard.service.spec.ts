import { TestBed } from '@angular/core/testing';

import { SallerGuardService } from './saller-guard.service';

describe('SallerGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SallerGuardService = TestBed.get(SallerGuardService);
    expect(service).toBeTruthy();
  });
});
