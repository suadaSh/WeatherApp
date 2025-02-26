import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MyWeatherAppService } from '../my-weather-app.service';

@Component({
  selector: 'app-city-temperature',
  standalone: true,
  imports: [InputTextModule, ButtonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './city-temperature.component.html',
  styleUrls: ['./city-temperature.component.css'],
})
export class CityTemperatureComponent {
  location?: string | null | undefined;
  weatherData: any;
  errorMessage: string = '';

  constructor(private weatherSrv: MyWeatherAppService) {}
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
      this.weatherSrv.getWeather(location).subscribe({
        next: (response) => {
          console.log('Full API Response:', response);
          this.weatherData = response;
        },
        error: (err) => {
          console.error('Error fetching weather:', err);
        },
      });
    } else {
      console.log('Form is invalid'); 
    }
  }
}
