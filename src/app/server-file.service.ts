import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerFileService {

  dataReceivedViaAPI = new BehaviorSubject<any>([]);

  constructor(private _http: HttpClient) {
  }

  // allNewsURL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=c889e51513e14bf8829fc6c164fcc451';
  // techNewsURL = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c889e51513e14bf8829fc6c164fcc451';
  // sportsNewsURL = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c889e51513e14bf8829fc6c164fcc451';

  // returning data as observable
  fetchUpdatedData() {
    return this.dataReceivedViaAPI.asObservable();
  }

  // setting data into variable dataReceivedViaAPI
  setUpdatedData(data: any) {
    this.dataReceivedViaAPI.next(data);
  }

  // fetching data from API
  fetchNews(topic: string ='breaking-news', country: string = 'in', query?: string): Observable<any> {
    return this._http.get(environment.wrapper_url + `&topic=${topic}&country=${country}&q=${query}`);
  }
}
