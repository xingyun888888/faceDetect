import { TestBed, inject } from '@angular/core/testing';

import { InterceptorService} from './interceptor-service.service';

describe('InterceptorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptorService]
    });
  });

  it('should be created', inject([InterceptorService], (service: InterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
