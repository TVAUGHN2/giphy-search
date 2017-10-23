import { Injectable } from '@angular/core';

import { UserSearch } from './search-history/search-history.model';

@Injectable()
export class SearchHistoryService {
  searchHistory: UserSearch[] = [];

  constructor() {}

  addToSearchHistory(t: string) {
    this.searchHistory.push(new UserSearch(t));
  }

  getSearchHistory() : UserSearch[] {
    return this.searchHistory;
  }
}
