import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { BehaviorSubject, EMPTY, Observable, switchMap } from 'rxjs';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  public isMenuOpen = false;
  public weatherData$: Observable<any> = EMPTY;
  private selectedCity$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'toronto'
  );

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherData$ = this.selectedCity$.pipe(
      switchMap((city: string) => this.weatherService.getWeatherData(city))
    );
  }

  toggleDropdown() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSelectCity(event: any) {
    const city = event.target.value;
    if (city) {
      this.selectedCity$.next(city);
    }
  }
}
