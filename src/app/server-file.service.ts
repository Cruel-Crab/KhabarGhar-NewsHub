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
  // techNewsURL = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c889e51513e14bf8829fc6c164fcc451';
  // sportsNewsURL = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c889e51513e14bf8829fc6c164fcc451';


  api_token: string = '1b22c075e8922ac2d6e3b9f6e898190d';

  wrapper_url: string = `https://gnews.io/api/v4/top-headlines?lang=en&token=${this.api_token}`;

  fetchNews(topic: string ='breaking-news', country: string = 'in'): Observable<any> {
    return this._http.get(this.wrapper_url + `&topic=${topic}&country=${country}`);
  }
}
