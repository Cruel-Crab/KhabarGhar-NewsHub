import {Component, OnInit} from '@angular/core';
import {ServerFileService} from "../../server-file.service";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  allNewsHeadline: any = [];
  isFetching: boolean = false;

  constructor(private serverSvc: ServerFileService) {
  }

  ngOnInit(): void {
    this.showAllNews();
  }

  showAllNews() {
    this.isFetching = true;
    this.serverSvc.fetchNews().subscribe(
      (result) => {
        this.isFetching = false;
        this.allNewsHeadline = result.articles;
      }
    )
  }

}
