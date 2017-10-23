import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SearchComponent } from './search/search.component';

import { SearchHistoryService } from './search-history.service';
import { WikiSearchService } from './wiki-search.service';
import { GiphySearchService } from './giphy-search.service';

const appRoutes: Routes = [
  { path: 'search-history', component: SearchHistoryComponent },
  { path: 'search', component: SearchComponent},
  { path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [SearchHistoryService, WikiSearchService, GiphySearchService],
  bootstrap: [AppComponent]
})


export class AppModule { }
