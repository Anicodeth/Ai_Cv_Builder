import { TestBed } from '@angular/core/testing';

import { CompletenessService } from './completeness.service';

describe('CompletenessService', () => {
  let service: CompletenessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompletenessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
