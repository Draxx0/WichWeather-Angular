import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { style } from '@angular/animations';
import { tap } from 'rxjs';
import { Weather } from 'src/app/weather';

@Component({
  selector: 'weatherComponent',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss'],
})
export class WeatherContainerComponent implements OnInit {

  cityName: string = '';
  cityWeather: string = '';
  cityTemp: string = '';

  url_icon = ''
  url_img = '../../../assets/img/bg/Clouds.jpg'

  CloudsImg: string = "../../../assets/img/bg/Clouds.jpg"
  SnowImg: string = "../../../assets/img/bg/Snow.png"
  RainImg: string = "../../../assets/img/bg/Rain.png"
  ClearImg: string = "../../../assets/img/bg/Mountain_View_and_Beautiful_Landscape_generated.jpg"
  FogImg: string = "../../../assets/img/bg/fog.jpg"
  DrizzleImg: string = "../../../assets/img/bg/Fog.png"

  CloudsIcon: string = "../../../assets/img/weather-icons/wi-cloud.svg"
  SnowIcon: string = "../../../assets/img/weather-icons/wi-day-snow.svg"
  RainIcon: string = "../../../assets/img/weather-icons/wi-rain.svg"
  ClearIcon: string = "../../../assets/img/weather-icons/wi-day-sunny.svg"
  MistIcon: string = "../../../assets/img/weather-icons/wi-fog.svg"
  DrizzleIcon: string = "../../../assets/img/weather-icons/wi-smoke.svg"

  currentWeather?: Weather;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      this.httpClient
        .get<Weather>(
          `http://localhost:3000/test?lat=${lat}&lon=${long}&units=metric&appid=d916bb262d7dc0b62e3bd99b9bc40bd0`
        )
        .pipe(tap(console.log))
        .subscribe((data:Weather) => {
          this.currentWeather = data
          this.getUrl(data.weatherName) 
        });
    });
  }


  convertTimeStamp(timeStamp:number) : Date{
    return new Date (timeStamp*1000);
  }

  roundTemp(temp:number){
    return Math.round(temp);
  }

  getUrl(condition: string){
    switch (condition) {

      case 'Clear': this.url_img = this.ClearImg
      this.url_icon = this.ClearIcon
      break;
    
      case 'Snow': this.url_img = this.SnowImg
      this.url_icon = this.SnowIcon
      break;

      case 'Rain': this.url_img = this.RainImg
      this.url_icon = this.RainIcon
      break;

      case 'Fog': this.url_img = this.FogImg
      this.url_icon = this.MistIcon
      break;

      case 'Drizzle': this.url_img = this.DrizzleImg
      this.url_icon = this.DrizzleIcon
      break;

      case 'Clouds': this.url_img = this.CloudsImg
      this.url_icon = this.CloudsIcon
      break;

      default: this.url_img = this.ClearImg
      this.url_icon = this.ClearIcon
      break;
    }
  }

  loadParisName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=paris')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
        // this.cityName = data.cityName;
        // this.cityWeather = data.weatherName;
        // this.getUrl(data.weatherName)
        // this.cityTemp = data.weatherTemp;
        // this.weatherHumidity = data.weatherHumidity;
        // this.weatherPressure = data.weatherPressure;
        // this.weatherWindSpeed = data.weatherWindSpeed;
        // this.weatherTempMax = data.weatherTempMax;
        // this.weatherTempMin = data.weatherTempMin;
        // this.weatherSunrise = data.weatherSunrise*1000;
        // this.weatherSunset = data.weatherSunset*1000;
        // this.weatherFeelsLike = data.weatherFeelsLike;
      });
  }

  loadBordeauxName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=bordeaux')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
        // this.cityName = data.cityName;
        // this.cityWeather = data.weatherName;
        // this.cityTemp = data.weatherTemp;
        // this.weatherHumidity = data.weatherHumidity;
        // this.weatherPressure = data.weatherPressure;
        // this.weatherWindSpeed = data.weatherWindSpeed;
        // this.weatherTempMax = data.weatherTempMax;
        // this.weatherTempMin = data.weatherTempMin;
        // this.weatherSunrise = data.weatherSunrise*1000;
        // this.weatherSunset = data.weatherSunset*1000;
        // this.weatherFeelsLike = data.weatherFeelsLike;
        
      });
  }

  loadStrasbourgName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=strasbourg')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
        // this.cityName = data.cityName;
        // this.cityWeather = data.weatherName;
        // this.cityTemp = data.weatherTemp;
        // this.weatherHumidity = data.weatherHumidity;
        // this.weatherPressure = data.weatherPressure;
        // this.weatherWindSpeed = data.weatherWindSpeed;
        // this.weatherTempMax = data.weatherTempMax;
        // this.weatherFeelsLike = data.weatherFeelsLike;
        // this.weatherTempMin = data.weatherTempMin;
        // this.weatherSunrise = data.weatherSunrise*1000;
        // this.weatherSunset = data.weatherSunset*1000;
      });
  }

  loadToulouseName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=toulouse')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
        // this.cityName = data.cityName;
        // this.cityWeather = data.weatherName;
        // this.cityTemp = data.weatherTemp;
        // this.weatherHumidity = data.weatherHumidity;
        // this.weatherPressure = data.weatherPressure;
        // this.weatherWindSpeed = data.weatherWindSpeed;
        // this.weatherTempMax = data.weatherTempMax;
        // this.weatherTempMin = data.weatherTempMin;
        // this.weatherSunrise = data.weatherSunrise*1000;
        // this.weatherSunset = data.weatherSunset*1000;
        // this.weatherFeelsLike = data.weatherFeelsLike;
      });
  }

  loadLilleName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=lille')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
        // this.cityName = data.cityName;
        // this.cityWeather = data.weatherName;
        // this.cityTemp = data.weatherTemp;
        // this.weatherHumidity = data.weatherHumidity;
        // this.weatherPressure = data.weatherPressure;
        // this.weatherWindSpeed = data.weatherWindSpeed;
        // this.weatherTempMax = data.weatherTempMax;
        // this.weatherTempMin = data.weatherTempMin;
        // this.weatherSunrise = data.weatherSunrise*1000;
        // this.weatherFeelsLike = data.weatherFeelsLike;
        // this.weatherSunset = data.weatherSunset*1000;
      });
  }

  loadBrestName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=brest')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
        console.log(this.url_img);
        console.log(data.weatherName);
        
        
        // this.cityName = data.cityName;
        // this.cityWeather = data.weatherName;
        // this.cityTemp = data.weatherTemp;
        // this.weatherHumidity = data.weatherHumidity;
        // this.weatherPressure = data.weatherPressure;
        // this.weatherWindSpeed = data.weatherWindSpeed;
        // this.weatherFeelsLike = data.weatherFeelsLike;
        // this.weatherTempMax = data.weatherTempMax;
        // this.weatherTempMin = data.weatherTempMin;
        // this.weatherSunrise = data.weatherSunrise*1000;
        // this.weatherSunset = data.weatherSunset*1000;
      });
  }

  loadMontpellierName(): void {
    this.httpClient
      .get<Weather>('http://localhost:3000?cityName=montpellier')
      .subscribe((data) => {
        this.currentWeather = data
        this.getUrl(data.weatherName)
        console.log(this.url_img);
        
        // this.cityName = data.cityName;
        // this.cityWeather = data.weatherName;
        // this.cityTemp = data.weatherTemp;
        // this.weatherHumidity = data.weatherHumidity;
        // this.weatherPressure = data.weatherPressure;
        // this.weatherWindSpeed = data.weatherWindSpeed;
        // this.weatherFeelsLike = data.weatherFeelsLike;
        // this.weatherTempMax = data.weatherTempMax;
        // this.weatherTempMin = data.weatherTempMin;
        // this.weatherSunrise = data.weatherSunrise*1000;
        // this.weatherSunset = data.weatherSunset*1000;
      });
  }

  loadMaPositionsName(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      this.httpClient
        .get<Weather>(
          `http://localhost:3000/test?lat=${lat}&lon=${long}&units=metric&appid=d916bb262d7dc0b62e3bd99b9bc40bd0`
        )
        .subscribe((data) => {
          this.currentWeather = data
          this.getUrl(data.weatherName)
          // console.log(data);
          // this.cityName = data.cityName;
          // this.cityWeather = data.weatherName;
          // this.cityTemp = data.weatherTemp;
          // this.weatherHumidity = data.weatherHumidity;
          // this.weatherPressure = data.weatherPressure;
          // this.weatherFeelsLike = data.weatherFeelsLike;
          // this.weatherWindSpeed = data.weatherWindSpeed;
          // this.weatherTempMax = data.weatherTempMax;
          // this.weatherTempMin = data.weatherTempMin;
          // this.weatherSunrise = data.weatherSunrise*1000;
          // this.weatherSunset = data.weatherSunset*1000;
          // console.log(this.weatherSunset);
          
        });
    });


  }
}
