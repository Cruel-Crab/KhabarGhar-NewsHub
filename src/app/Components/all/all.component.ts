import {Component, OnInit} from '@angular/core';
import {ServerFileService} from "../../server-file.service";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  allNewsHeadline: any = [];
  articlesLength: number = 0;
  isFetching: boolean = false;

  constructor(private serverSvc: ServerFileService) {
    
    this.serverSvc.fetchUpdatedData().subscribe((result) => {
      this.allNewsHeadline = result.articles;
      this.articlesLength = result.totalArticles;
      console.log('Print kar raha hu bhai result ko chalega na? ', result);
    });
  }

  ngOnInit(): void {
    this.showAllNews();
  }

  showAllNews() {
    this.isFetching = true;
    this.serverSvc.fetchNews().subscribe(
      (result) => {
        this.isFetching = false;
        this.articlesLength = result.totalArticles;
        this.allNewsHeadline = result.articles;
      }
    )
  }

}
