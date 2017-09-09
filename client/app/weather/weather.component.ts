import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'fp-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  lat: string;
  long: string;

  onSubmit(form: NgForm){
    this.lat = form.value.lat;
    this.long = form.value.long;
    console.log("lat: ", this.lat, "long: ", this.long);
  }
  useGps() {
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos)=>console.log(pos));
    }else{
      alert("Geolocation unavailable, please enter location manually")
    }
  }

}
