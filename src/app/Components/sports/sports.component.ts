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

  constructor(private serviceFile: ServerFileService) {
  }

  ngOnInit(): void {
    this.showSNews()
  }

  showSNews() {
    this.isFetching = true;
    this.serviceFile.fetchNews('sports').subscribe(
      (result) => {
        this.isFetching = false;
        this.sportNewsHeadLine = result.articles;
      }
    )
  }

}
