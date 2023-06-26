import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData('Toronto').subscribe((data) => {
      console.log({ data });
      this.weatherData = data;
    });
  }
}
