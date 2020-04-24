import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../Services/weather.service';
import {GeolocationService} from '../Services/geolocation.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weatherData:any=[];
  geoLon:number;
  geoLat:number;

  constructor( private weatherService:WeatherService ,private geolocationService:GeolocationService) { }

  ngOnInit() {
    this.weatherService.getLatestWeather().subscribe(
      (wdata)=>{
        this.weatherData = wdata.weather;
        console.log(this.weatherData);
      }
   );
  }

}
