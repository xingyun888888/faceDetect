import { TestBed, inject } from '@angular/core/testing';

import { CustomValidService } from './custom-valid.service';

describe('CustomValidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomValidService]
    });
  });

  it('should be created', inject([CustomValidService], (service: CustomValidService) => {
    expect(service).toBeTruthy();
  }));
});
