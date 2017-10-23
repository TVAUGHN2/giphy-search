import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class WikiSearchService {
  searchResult: string[];
  constructor(private http: Http) {
      this.searchResult = []; //json
  }

  search(text: string): Promise<any>{ 
    this.searchResult = []; //reset results on each search
    let promise = new Promise((resolve, reject) => {
        //creating REST call
        let searchStr = "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" 
                            + text + "&origin=*";
        this.http.get(searchStr).toPromise().then(
            res => { // Success
                var jsonResult = res.json()["query"]["search"]; //grab array of search results from json
                jsonResult.forEach(result => {
                    this.searchResult.push(result["title"]);
                });

                resolve();
              }
        );
      });
    return promise;
  }

  getResults(): string[]{
      return this.searchResult;
  }
}


