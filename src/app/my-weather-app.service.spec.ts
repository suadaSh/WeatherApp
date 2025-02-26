import { TestBed } from '@angular/core/testing';

import { MyWeatherAppService } from './my-weather-app.service';

describe('MyWeatherAppService', () => {
  let service: MyWeatherAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyWeatherAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
