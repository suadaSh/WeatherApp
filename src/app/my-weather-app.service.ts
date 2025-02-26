import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyWeatherAppService {
  constructor(private http: HttpClient) {}

  private myKey = 'WD8HELCLJRQ3V8YHEEUNKD6C6';
  private baseUrl =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';
     getWeather(location: string): Observable<any> {
    const url = `${this.baseUrl}/${location}?key=${this.myKey}&unitGroup=metric`;
    return this.http.get<any>(url);
  }
}
