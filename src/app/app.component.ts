import { Component } from '@angular/core';
import { SearchHistoryComponent } from './search-history/search-history.component'

import { SearchHistoryService } from './search-history.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
}
