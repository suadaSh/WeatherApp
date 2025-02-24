import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CityTemperatureComponent } from "./city-temperature/city-temperature.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CityTemperatureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weatherApp';
}
