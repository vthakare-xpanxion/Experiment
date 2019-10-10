import { TestBed } from '@angular/core/testing';

import { OrderPlaceService } from './order-place.service';

describe('OrderPlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderPlaceService = TestBed.get(OrderPlaceService);
    expect(service).toBeTruthy();
  });
});
