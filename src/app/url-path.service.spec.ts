import { TestBed } from '@angular/core/testing';

import { UrlPathService } from './url-path.service';

describe('UrlPathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlPathService = TestBed.get(UrlPathService);
    expect(service).toBeTruthy();
  });
});
