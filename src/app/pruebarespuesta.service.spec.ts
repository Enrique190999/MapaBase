import { TestBed } from '@angular/core/testing';

import { PruebarespuestaService } from './pruebarespuesta.service';

describe('PruebarespuestaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PruebarespuestaService = TestBed.get(PruebarespuestaService);
    expect(service).toBeTruthy();
  });
});
