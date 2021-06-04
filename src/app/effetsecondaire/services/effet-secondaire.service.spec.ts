import { TestBed } from '@angular/core/testing';

import { EffetSecondaireService } from './effet-secondaire.service';

describe('EffetSecondaireService', () => {
  let service: EffetSecondaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EffetSecondaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
