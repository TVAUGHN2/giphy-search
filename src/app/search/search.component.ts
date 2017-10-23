import { Component, OnInit } from '@angular/core';
import { SearchHistoryService } from '../search-history.service'
import { WikiSearchService } from '../wiki-search.service'
import { GiphySearchService } from '../giphy-search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: string[] = [];
  giphyUrls: string[] = [];
  constructor(private searchHistoryService: SearchHistoryService, 
              private wikiSearchService: WikiSearchService,
              private giphySearchService: GiphySearchService) {}
  
  searchText(input: HTMLInputElement): void {
    //wiki
    this.wikiSearchService.search(input.value); //search wikipedia
    this.searchResults = this.wikiSearchService.getResults(); //store wiki results

    //giphy
    this.giphySearchService.search(input.value); //search giphy
    this.giphyUrls = this.giphySearchService.getResults(); //store giphy results

    console.log(this.giphyUrls);

    //update search history
    this.searchHistoryService.addToSearchHistory(input.value); 
    

    input.value = "";
  }

  ngOnInit() {
  }

}
