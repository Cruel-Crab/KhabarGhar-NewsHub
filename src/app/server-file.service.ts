import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServerFileService {

  constructor(private _http: HttpClient) {
  }

  // allNewsURL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=c889e51513e14bf8829fc6c164fcc451';
  allNewsURL = 'https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=1b22c075e8922ac2d6e3b9f6e898190d'
  techNewsURL = 'https://gnews.io/api/v4/top-headlines?lang=en&country=in&topic=technology&token=1b22c075e8922ac2d6e3b9f6e898190d';
  // techNewsURL = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c889e51513e14bf8829fc6c164fcc451';
  sportsNewsURL = 'https://gnews.io/api/v4/top-headlines?lang=en&country=in&topic=sports&token=1b22c075e8922ac2d6e3b9f6e898190d'
  // sportsNewsURL = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c889e51513e14bf8829fc6c164fcc451';

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
