import { TestBed } from '@angular/core/testing';

import { PharmacieserviceService } from './pharmacieservice.service';

describe('PharmacieserviceService', () => {
  let service: PharmacieserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacieserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
