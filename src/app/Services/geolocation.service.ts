import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Geolocation} from'@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  lat:number;
  long:number;

  constructor( private geolocation:Geolocation) { }
  locationLat():number{
    this.geolocation.getCurrentPosition().then((resp)=>{
      return( Math.round(resp.coords.latitude)); 
      }).catch((error)=>{console.log("Error getting location", error)})
      return
  }

  locationLon():number{
    this.geolocation.getCurrentPosition().then((resp)=>{
      return( Math.round(resp.coords.longitude)); 
      }).catch((error)=>{console.log("Error getting location", error)})
      return
  }
}
