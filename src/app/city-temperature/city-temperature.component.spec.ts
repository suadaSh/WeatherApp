import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTemperatureComponent } from './city-temperature.component';

describe('CityTemperatureComponent', () => {
  let component: CityTemperatureComponent;
  let fixture: ComponentFixture<CityTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityTemperatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
