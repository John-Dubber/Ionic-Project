import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Geolocation} from'@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 

  constructor( private httpClient:HttpClient, private geolocation:Geolocation) { }

  getLatestWeather():Observable<any>{
    return(this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?lat='+54+'&lon='+120+'&appid=bbe9e2f1b277a773d53eb45044ce05cb'));

  }
}
//bbe9e2f1b277a773d53eb45044ce05cb
