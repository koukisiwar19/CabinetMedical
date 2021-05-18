import { TestBed } from '@angular/core/testing';

import { ProfilserviceService } from './profilservice.service';

describe('ProfilserviceService', () => {
  let service: ProfilserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
