import { TestBed } from '@angular/core/testing';

import { CapasService } from './capas.service';

describe('CapasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapasService = TestBed.get(CapasService);
    expect(service).toBeTruthy();
  });
});
