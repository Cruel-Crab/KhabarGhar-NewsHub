import {Component, OnInit} from '@angular/core';
import {ServerFileService} from "../../server-file.service";

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  techNewsHeadLine: any = [];
  isFetching: boolean = false;
  articlesLength: number = 0;

  constructor(private serviceFile: ServerFileService) {
    this.serviceFile.fetchUpdatedData().subscribe((result) => {
      this.techNewsHeadLine = result.articles;
      this.articlesLength = result.totalArticles;
      console.log('Print kar raha hu bhai result ko chalega na? ', result);
    });
  }

  ngOnInit(): void {
    this.showTechNews()
  }

  showTechNews() {
    this.isFetching = true;
    this.serviceFile.fetchNews('technology').subscribe(
      (result) => {
        this.isFetching = false;
        this.articlesLength = result.totalArticles;
        this.techNewsHeadLine = result.articles;
      }
    )
  }


}
