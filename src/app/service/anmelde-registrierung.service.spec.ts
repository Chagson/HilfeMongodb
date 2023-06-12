import { TestBed } from '@angular/core/testing';

import { AnmeldeRegistrierungService } from './anmelde-registrierung.service';

describe('AnmeldeRegistrierungService', () => {
  let service: AnmeldeRegistrierungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnmeldeRegistrierungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
