import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MyWeatherAppService } from '../my-weather-app.service';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-city-temperature',
  standalone: true,
  imports: [
    InputTextModule,
    MessageModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    ProgressSpinnerModule,
  ],
  templateUrl: './city-temperature.component.html',
  styleUrls: ['./city-temperature.component.css'],
})
export class CityTemperatureComponent implements OnInit {
  location?: string | null | undefined;
  weatherData: any;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private weatherSrv: MyWeatherAppService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.weatherForm.get('location')?.valueChanges.subscribe((value) => {
      if (!value?.trim()) {
        this.weatherData = null;
        this.errorMessage = '';
      }
    });
  }
  weatherForm = new FormGroup({
    location: new FormControl('', Validators.required),
  });

  findWeather() {
    if (this.weatherForm.valid) {
      const location = this.weatherForm.get('location')?.value;
      if (!location) {
        console.error('Location is empty or undefined');

        return;
      }
      console.log('Searching for:', location);
      this.errorMessage = '';
      this.cdr.detectChanges();
      this.isLoading = true;

      this.weatherSrv.getWeather(location).subscribe({
        next: (response) => {
          console.log('Full API Response:', response);

          if (response && response.resolvedAddress) {
            this.weatherData = response;
            this.errorMessage = '';
            this.isLoading = false;
          } else {
            this.weatherData = null;
            this.errorMessage = 'No weather data found for this location.';
            this.isLoading = false;
          }
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error fetching weather:', err);
          this.weatherData = null;
          this.errorMessage = 'Invalid location. Please try again.';
          this.cdr.detectChanges();
          this.isLoading = false;
        },
      });
    } else {
      console.log('Form is invalid');
      this.weatherData = null;
      this.errorMessage = 'Please enter a city name before searching.';
      this.cdr.detectChanges();
      this.isLoading = false;
    }
  }
}
