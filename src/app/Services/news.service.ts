import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  getLatestNewsStories():Observable<any>{
     return(this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&apiKey=2a79931c269c412dac7d643d7338c8c1'));
  }
}
