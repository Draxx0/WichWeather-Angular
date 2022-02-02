import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'weatherComponent',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss'],
})
export class WeatherContainerComponent implements OnInit {
  cityName: string = '';
  cityWeather: string = '';
  cityTemp: string = '';
  weatherHumidity: string = '';
  weatherPressure: string = '';
  weatherFeelsLike: string = '';
  weatherWindSpeed: string = '';
  weatherTempMax: string = '';
  weatherTempMin: string = '';
  weatherSunrise: number = 0;
  weatherSunset: number = 0;
  backgroundImgUrl: string = '../../../assets/img/bg/Clouds.jpg';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      this.httpClient
        .get<any>(
          `http://localhost:3000/test?lat=${lat}&lon=${long}&units=metric&appid=d916bb262d7dc0b62e3bd99b9bc40bd0`
        )
        .subscribe((data) => {
          console.log(data);
          this.cityName = data.cityName;
          this.cityWeather = data.weatherName;
          this.cityTemp = data.weatherTemp;
          this.weatherHumidity = data.weatherHumidity;
          this.weatherPressure = data.weatherPressure;
          this.weatherFeelsLike = data.weatherFeelsLike;
          this.weatherWindSpeed = data.weatherWindSpeed;
          this.weatherTempMax = data.weatherTempMax;
          this.weatherTempMin = data.weatherTempMin;
          this.weatherSunrise = data.weatherSunrise*1000;
          this.weatherSunset = data.weatherSunset*1000;
          console.log(this.weatherSunset);
          
        });
    });
  }

  loadParisName(): void {
    this.httpClient
      .get<any>('http://localhost:3000?cityName=paris')
      .subscribe((data) => {
        console.log(data);
        this.cityName = data.cityName;
        this.cityWeather = data.weatherName;
        this.cityTemp = data.weatherTemp;
        this.weatherHumidity = data.weatherHumidity;
        this.weatherPressure = data.weatherPressure;
        this.weatherWindSpeed = data.weatherWindSpeed;
        this.weatherTempMax = data.weatherTempMax;
        this.weatherTempMin = data.weatherTempMin;
        this.weatherSunrise = data.weatherSunrise*1000;
        this.weatherSunset = data.weatherSunset*1000;
        this.weatherFeelsLike = data.weatherFeelsLike;

        // if (data.weather.Name == "cloudy") {
        //   document.body.style.backgroundImage = "https://via.placeholder.com"
        // }
      });
  }

  loadBordeauxName(): void {
    this.httpClient
      .get<any>('http://localhost:3000?cityName=bordeaux')
      .subscribe((data) => {
        console.log(data);
        this.cityName = data.cityName;
        this.cityWeather = data.weatherName;
        this.cityTemp = data.weatherTemp;
        this.weatherHumidity = data.weatherHumidity;
        this.weatherPressure = data.weatherPressure;
        this.weatherWindSpeed = data.weatherWindSpeed;
        this.weatherTempMax = data.weatherTempMax;
        this.weatherTempMin = data.weatherTempMin;
        this.weatherSunrise = data.weatherSunrise*1000;
        this.weatherSunset = data.weatherSunset*1000;
        this.weatherFeelsLike = data.weatherFeelsLike;
        
      });
  }

  loadStrasbourgName(): void {
    this.httpClient
      .get<any>('http://localhost:3000?cityName=strasbourg')
      .subscribe((data) => {
        console.log(data);
        this.cityName = data.cityName;
        this.cityWeather = data.weatherName;
        this.cityTemp = data.weatherTemp;
        this.weatherHumidity = data.weatherHumidity;
        this.weatherPressure = data.weatherPressure;
        this.weatherWindSpeed = data.weatherWindSpeed;
        this.weatherTempMax = data.weatherTempMax;
        this.weatherFeelsLike = data.weatherFeelsLike;
        this.weatherTempMin = data.weatherTempMin;
        this.weatherSunrise = data.weatherSunrise*1000;
        this.weatherSunset = data.weatherSunset*1000;
      });
  }

  loadToulouseName(): void {
    this.httpClient
      .get<any>('http://localhost:3000?cityName=toulouse')
      .subscribe((data) => {
        console.log(data);
        this.cityName = data.cityName;
        this.cityWeather = data.weatherName;
        this.cityTemp = data.weatherTemp;
        this.weatherHumidity = data.weatherHumidity;
        this.weatherPressure = data.weatherPressure;
        this.weatherWindSpeed = data.weatherWindSpeed;
        this.weatherTempMax = data.weatherTempMax;
        this.weatherTempMin = data.weatherTempMin;
        this.weatherSunrise = data.weatherSunrise*1000;
        this.weatherSunset = data.weatherSunset*1000;
        this.weatherFeelsLike = data.weatherFeelsLike;
      });
  }

  loadLilleName(): void {
    this.httpClient
      .get<any>('http://localhost:3000?cityName=lille')
      .subscribe((data) => {
        console.log(data);
        this.cityName = data.cityName;
        this.cityWeather = data.weatherName;
        this.cityTemp = data.weatherTemp;
        this.weatherHumidity = data.weatherHumidity;
        this.weatherPressure = data.weatherPressure;
        this.weatherWindSpeed = data.weatherWindSpeed;
        this.weatherTempMax = data.weatherTempMax;
        this.weatherTempMin = data.weatherTempMin;
        this.weatherSunrise = data.weatherSunrise*1000;
        this.weatherFeelsLike = data.weatherFeelsLike;
        this.weatherSunset = data.weatherSunset*1000;
      });
  }

  loadBrestName(): void {
    this.httpClient
      .get<any>('http://localhost:3000?cityName=brest')
      .subscribe((data) => {
        console.log(data);
        this.cityName = data.cityName;
        this.cityWeather = data.weatherName;
        this.cityTemp = data.weatherTemp;
        this.weatherHumidity = data.weatherHumidity;
        this.weatherPressure = data.weatherPressure;
        this.weatherWindSpeed = data.weatherWindSpeed;
        this.weatherFeelsLike = data.weatherFeelsLike;
        this.weatherTempMax = data.weatherTempMax;
        this.weatherTempMin = data.weatherTempMin;
        this.weatherSunrise = data.weatherSunrise*1000;
        this.weatherSunset = data.weatherSunset*1000;
      });
  }

  loadMontpellierName(): void {
    this.httpClient
      .get<any>('http://localhost:3000?cityName=montpellier')
      .subscribe((data) => {
        console.log(data);
        this.cityName = data.cityName;
        this.cityWeather = data.weatherName;
        this.cityTemp = data.weatherTemp;
        this.weatherHumidity = data.weatherHumidity;
        this.weatherPressure = data.weatherPressure;
        this.weatherWindSpeed = data.weatherWindSpeed;
        this.weatherFeelsLike = data.weatherFeelsLike;
        this.weatherTempMax = data.weatherTempMax;
        this.weatherTempMin = data.weatherTempMin;
        this.weatherSunrise = data.weatherSunrise*1000;
        this.weatherSunset = data.weatherSunset*1000;
      });
  }
}
