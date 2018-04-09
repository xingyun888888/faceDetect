import { TestBed, inject } from '@angular/core/testing';

import { ImgPreviewService } from './img-preview.service';

describe('ImgPreviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgPreviewService]
    });
  });

  it('should be created', inject([ImgPreviewService], (service: ImgPreviewService) => {
    expect(service).toBeTruthy();
  }));
});
