import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServerFileService {

  constructor(private _http: HttpClient) {
  }

  allNewsURL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=c889e51513e14bf8829fc6c164fcc451';
  techNewsURL = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c889e51513e14bf8829fc6c164fcc451';
  sportsNewsURL = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c889e51513e14bf8829fc6c164fcc451';

  getAllNews(): Observable<any> {
    return this._http.get(this.allNewsURL);
  }

  getTechNews(): Observable<any> {
    return this._http.get(this.techNewsURL)
  }

  getSportsNews(): Observable<any> {
    return this._http.get(this.sportsNewsURL)
  }
}
