import { Component, OnInit} from '@angular/core';
import { UserSearch } from '../search-history/search-history.model'

import { SearchHistoryService } from '../search-history.service'

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  searchHistory: UserSearch[];


  constructor(private searchHistoryService: SearchHistoryService) { 
    this.searchHistory = [];
  }
  
  getSearchHistory(): void {
    this.searchHistory = this.searchHistoryService.getSearchHistory();
    console.log(this.searchHistoryService.getSearchHistory());
  }
  
  ngOnInit(): void {
    this.getSearchHistory();
  }
}
