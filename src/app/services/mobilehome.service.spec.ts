import { TestBed } from '@angular/core/testing';

import { MobilehomeService } from './mobilehome.service';

describe('MobilehomeService', () => {
  let service: MobilehomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobilehomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
