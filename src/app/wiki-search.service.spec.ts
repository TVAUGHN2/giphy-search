import { TestBed, inject } from '@angular/core/testing';

import { WikiSearchService } from './wiki-search.service';

describe('PyramidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikiSearchService]
    });
  });

  it('should ...', inject([WikiSearchService], (service: WikiSearchService) => {
    expect(service).toBeTruthy();
  }));
});
