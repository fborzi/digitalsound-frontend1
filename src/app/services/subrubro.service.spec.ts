import { TestBed } from '@angular/core/testing';

import { SubrubroService } from './subrubro.service';

describe('SubrubroService', () => {
  let service: SubrubroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubrubroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
