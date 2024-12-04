import { TestBed } from '@angular/core/testing';

import { GhostloadingService } from './ghostloading.service';

describe('GhostloadingService', () => {
  let service: GhostloadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhostloadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
