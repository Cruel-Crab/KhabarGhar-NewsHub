import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerFileService } from 'src/app/server-file.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  routeInfoSubscription: any;
  routeName: string = '';
  placeholder: string = 'Search for news...';
  searchStr: string = '';

  constructor(private serverSvc: ServerFileService, private router: Router) { 
  }

  ngOnInit(): void {
    // getting the current route name
    this.routeInfoSubscription = this.router.events.subscribe(value => {
      this.routeName = this.router.url.toString().replace('/', '');
    });
  }

  // search for news for entered keywords
  searchForKeywords() {
    console.log('Searching for keyword: ', this.searchStr);
    this.serverSvc.fetchNews('breaking-news', 'in', this.searchStr).subscribe((result) => {
      console.log(result);
      this.serverSvc.setUpdatedData(result);
    });
  }

  // clear the search input field and fetch the news for the current route
  clearInput() {
    if(this.searchStr.length == 0) {
      this.serverSvc.fetchNews((this.routeName == 'all' ? 'breaking-news' : this.routeName), 'in').subscribe((result) => {
        this.serverSvc.setUpdatedData(result);
      });
      
    }
  }

}
