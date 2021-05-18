import { TestBed } from '@angular/core/testing';

import { ServicecalendrerService } from './servicecalendrer.service';

describe('ServicecalendrerService', () => {
  let service: ServicecalendrerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecalendrerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
