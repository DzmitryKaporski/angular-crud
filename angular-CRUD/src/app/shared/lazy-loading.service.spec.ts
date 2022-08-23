import { TestBed } from '@angular/core/testing';

import { LazyLoadingService } from './lazy-loading.service';

describe('LazyLoadingService', () => {
  let service: LazyLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
