import { TestBed, inject } from '@angular/core/testing';

import { GiphySearchService } from './giphy-search.service';

describe('PyramidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiphySearchService]
    });
  });

  it('should ...', inject([GiphySearchService], (service: GiphySearchService) => {
    expect(service).toBeTruthy();
  }));
});
