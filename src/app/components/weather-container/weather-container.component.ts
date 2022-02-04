import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { style } from '@angular/animations';
import { tap, timeout } from 'rxjs';
import { Weather } from 'src/app/weather';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'weatherComponent',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss'],
})
export class WeatherContainerComponent implements OnInit {
  
  isSun: boolean = false;
  isFavoriteContainer = false

  cityName: string = '';
  cityWeather: string = '';
  cityTemp: string = '';

  cities = ['Paris', 'Bordeaux', 'Strasbourg', 'Lille', 'Toulouse', 'Brest', 'Montpellier', 'Dijon', 'Annecy', 'Angers', 'Quimper' ,'Chateauroux']
  favorites: Set<string>;

  url_icon = ''
  url_img = '../../../assets/img/bg/Clouds.jpg'

  CloudsImg: string = "../../../assets/img/bg/Clouds.jpg"
  SnowImg: string = "../../../assets/img/bg/Snow.png"
  RainImg: string = "../../../assets/img/bg/rain.jpg"
  ClearImg: string = "../../../assets/img/bg/Clear.jpg"
  FogImg: string = "../../../assets/img/bg/fog.jpg"
  MistImg: string = "../../../assets/img/bg/mist.jpg"
  DrizzleImg: string = "../../../assets/img/bg/Drizzle.jpg"

  CloudsIcon: string = "../../../assets/img/weather-icons/wi-cloud.svg"
  SnowIcon: string = "../../../assets/img/weather-icons/wi-snow.svg"
  RainIcon: string = "../../../assets/img/weather-icons/wi-rain.svg"
  ClearIcon: string = "../../../assets/img/weather-icons/wi-day-sunny.svg"
  FogIcon: string = "../../../assets/img/weather-icons/wi-fog.svg"
  MistIcon: string = "../../../assets/img/weather-icons/wi-fog.svg"
  DrizzleIcon: string = "../../../assets/img/weather-icons/wi-showers.svg"


  sound = new Howl({
    src: ['../../../assets/music/france-24-meteoweather-soundmusic.mp3'],
  });
 
  currentWeather?: Weather;
  constructor(private httpClient: HttpClient) {
    localStorage.getItem('favorites')
      ? this.favorites = new Set(JSON.parse(<string>localStorage.getItem('favorites')))
      : this.favorites = new Set([]);
  }

  ngOnInit(): void {
    this.sound.play();
    Howler.volume(0.2);
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      this.httpClient
        .get<Weather>(
          `http://localhost:3000/geoloc?lat=${lat}&lon=${long}&units=metric&appid=d916bb262d7dc0b62e3bd99b9bc40bd0`
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
      this.isSun = true
      break;
    
      case 'Snow': this.url_img = this.SnowImg
      this.url_icon = this.SnowIcon
      this.isSun = false
      break;

      case 'Rain': this.url_img = this.RainImg
      this.url_icon = this.RainIcon
      this.isSun = false
      break;

      case 'Fog': this.url_img = this.FogImg
      this.url_icon = this.FogIcon
      this.isSun = false
      break;

      case 'Drizzle': this.url_img = this.DrizzleImg
      this.url_icon = this.DrizzleIcon
      this.isSun = false
      break;

      case 'Clouds': this.url_img = this.CloudsImg
      this.url_icon = this.CloudsIcon
      this.isSun = false
      break;

      case 'Mist': this.url_img = this.MistImg
      this.url_icon = this.MistIcon
      this.isSun = false
      break;

      default: this.url_img = this.ClearImg
      this.url_icon = this.ClearIcon
      this.isSun = true
      break;
    }
  }


  loadCityData(city: string) {
    this.httpClient.get<Weather>(`http://localhost:3000?cityName=${city}`)
    .subscribe((data) => {
      this.currentWeather = data
      this.getUrl(data.weatherName)
  })}
  

  loadMaPositionsName(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      this.httpClient
        .get<Weather>(
          `http://localhost:3000/geoloc?lat=${lat}&lon=${long}&units=metric&appid=d916bb262d7dc0b62e3bd99b9bc40bd0`
        )
        .subscribe((data) => {
          this.currentWeather = data
          this.getUrl(data.weatherName)
        });
    });
  }

  addFavorite(city: string){
    this.favorites.add(city) 
    console.log(this.favorites);
    localStorage.setItem('favorites', JSON.stringify([...this.favorites]));
  }

  deleteFavorite(city: string){
    this.favorites.delete(city) 
    console.log(this.favorites);
    this.favorites.size === 0
      ? localStorage.removeItem('favorites')
      : localStorage.setItem('favorites', JSON.stringify([...this.favorites]));
  }
}
