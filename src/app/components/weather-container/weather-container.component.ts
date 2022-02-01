import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'weatherComponent',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss'],
})
export class WeatherContainerComponent implements OnInit {
  cityName: string = 'Bordeaux';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  loadCity(): void {
    this.httpClient
      .get<any>('http://localhost:3000?cityName=paris')
      .subscribe((data) => {
        console.log(data);
        this.cityName = data.name;  
      });
  }

  loadLyon(){
    this.cityName = 'Lyon';
  }
}
