import { TestBed } from '@angular/core/testing';

import { GhostloadingInterceptor } from './ghostloading.interceptor';

describe('GhostloadingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GhostloadingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GhostloadingInterceptor = TestBed.inject(GhostloadingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
