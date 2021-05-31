import { TestBed } from '@angular/core/testing';

import { GenerosService } from './generos.service';

describe('GenerosService', () => {
  let service: GenerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
