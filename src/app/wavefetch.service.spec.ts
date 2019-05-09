import { TestBed } from '@angular/core/testing';

import { WavefetchService } from './wavefetch.service';

describe('WavefetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WavefetchService = TestBed.get(WavefetchService);
    expect(service).toBeTruthy();
  });
});
