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

  constructor(private serviceFile: ServerFileService) {
  }

  ngOnInit(): void {
    this.showTechNews()
  }

  showTechNews() {
    this.isFetching = true;
    this.serviceFile.fetchNews('technology').subscribe(
      (result) => {
        this.isFetching = false;
        this.techNewsHeadLine = result.articles;
      }
    )
  }


}
