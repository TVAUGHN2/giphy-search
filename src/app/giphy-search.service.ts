import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class GiphySearchService {
  searchResult: string[];
  constructor(private http: Http) {
      this.searchResult = []; //json
  }

  search(text: string): Promise<any>{ 
    this.searchResult = []; //reset results on each search
    let promise = new Promise((resolve, reject) => {
        //creating REST call
        let searchStr = "https://api.giphy.com/v1/gifs/search?api_key=FLAiOzINNYHw6AO0C6fGKdJIfJiR5662&q=" + 
                            text + "&limit=25&offset=0&rating=G&lang=en&origin=*";
        this.http.get(searchStr).toPromise().then(
            res => { // Success
                var jsonResult = res.json()["data"]; //grab array of search results from json
                console.log(jsonResult);
                
                jsonResult.forEach(result => {
                    var image = result["images"]["fixed_height_small"]["url"];
                    //console.log(image);

                    this.searchResult.push(image);
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



//https://api.giphy.com/v1/gifs/search?api_key=FLAiOzINNYHw6AO0C6fGKdJIfJiR5662&q=test&limit=25&offset=0&rating=G&lang=en