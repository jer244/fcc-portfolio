import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';


@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeather(lat: number, long: number) {
    return this.http.get('http://api.wunderground.com/api/da061a8f6c81095e/conditions/q/' + lat + ',' + long + '.json')
      .map((res: Response) => res.json())
  }

}