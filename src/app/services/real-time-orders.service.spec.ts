import { TestBed } from '@angular/core/testing';

import { RealTimeOrdersService } from './real-time-orders.service';

describe('RealTimeOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealTimeOrdersService = TestBed.get(RealTimeOrdersService);
    expect(service).toBeTruthy();
  });
});
