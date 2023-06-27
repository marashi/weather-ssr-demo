import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = '1097c4fad4bfd938b4be23325cecaa07';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}&units=metric`
    );
  }
}
