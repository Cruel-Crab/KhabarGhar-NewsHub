import {Component, OnInit} from '@angular/core';
import {ServerFileService} from "../../server-file.service";

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sportNewsHeadLine: any = [];
  isFetching: boolean = false;
  articlesLength: number= 0;

  constructor(private serviceFile: ServerFileService) {
    this.serviceFile.fetchUpdatedData().subscribe((result) => {
      this.sportNewsHeadLine = result.articles;
      this.articlesLength = result.totalArticles;
      console.log('Print kar raha hu bhai result ko chalega na? ', result);
    });
  }

  ngOnInit(): void {
    this.showSNews()
  }

  showSNews() {
    this.isFetching = true;
    this.serviceFile.fetchNews('sports').subscribe(
      (result) => {
        this.isFetching = false;
        this.articlesLength = result.totalArticles;
        this.sportNewsHeadLine = result.articles;
      }
    )
  }

}
