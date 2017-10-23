import { TestBed, inject } from '@angular/core/testing';

import { SearchHistoryService } from './search-history.service';

describe('PyramidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchHistoryService]
    });
  });

  it('should ...', inject([SearchHistoryService], (service: SearchHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
