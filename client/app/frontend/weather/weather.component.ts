import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { WeatherService } from "app/frontend/weather/weather.service";

@Component({
  selector: 'fp-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService]
})
export class WeatherComponent {

  lat: number;
  long: number;
  currentConditions: Object;
  constructor(private weatherService: WeatherService) { };
  tempC = true;

  onSubmit(form: NgForm) {
    this.lat = form.value.lat;
    this.long = form.value.long;
    this.getWeather();
  }
  useGps() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.lat = pos.coords.latitude;
        this.long = pos.coords.longitude;
        this.getWeather();
      });
    } else {
      alert("Geolocation unavailable, please enter location manually")
    }
  }
  getWeather() {
    this.weatherService.getWeather(this.lat, this.long)
      .subscribe((res) => {
        this.currentConditions = res.current_observation;
        console.log(this.currentConditions);
      })
  }
  clearLocation() {
    this.currentConditions = null;
    this.lat = null;
    this.long = null;
  }
  toggleTemp() {
    this.tempC = !this.tempC;
  }
}
