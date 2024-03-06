import { TestBed } from '@angular/core/testing';

import { CharadeServiceService } from './charade-service.service';

describe('CharadeServiceService', () => {
  let service: CharadeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharadeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
