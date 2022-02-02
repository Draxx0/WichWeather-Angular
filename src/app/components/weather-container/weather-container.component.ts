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
  backgroundImgUrl : string = '../../../assets/img/bg/Clouds.jpg'
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      this.httpClient
        .get<any>(`http://localhost:3000/test?lat=${lat}&lon=${long}&units=metric&appid=d916bb262d7dc0b62e3bd99b9bc40bd0`)
        .subscribe((data) => { 
          console.log(data);
          this.cityName = data.cityName
          this.cityWeather = data.weatherName
          this.cityTemp = data.weatherTemp
        });
    });

    
  };



  loadParisName(): void {
    this.httpClient
      .get<any>('http://localhost:3000?cityName=paris')
      .subscribe((data) => {
        console.log(data);
        this.cityName = data.cityName
        this.cityWeather = data.weatherName
        this.cityTemp = data.weatherTemp

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
        this.cityName = data.cityName
        this.cityWeather = data.weatherName
        this.cityTemp = data.weatherTemp
      });
  }

  loadStrasbourgName(): void {
    this.httpClient
      .get<any>('http://localhost:3000?cityName=strasbourg')
      .subscribe((data) => {
        console.log(data);
        this.cityName = data.cityName
        this.cityWeather = data.weatherName
        this.cityTemp = data.weatherTemp
      });
  }


loadToulouseName(): void {
  this.httpClient
    .get<any>('http://localhost:3000?cityName=toulouse')
    .subscribe((data) => {
      console.log(data);
      this.cityName = data.cityName
      this.cityWeather = data.weatherName
      this.cityTemp = data.weatherTemp
    });
}


loadOrleansName(): void {
  this.httpClient
    .get<any>('http://localhost:3000?cityName=orleans')
    .subscribe((data) => {
      console.log(data);
      this.cityName = data.cityName
      this.cityWeather = data.weatherName
      this.cityTemp = data.weatherTemp
    });
}

loadBrestName(): void {
  this.httpClient
    .get<any>('http://localhost:3000?cityName=brest')
    .subscribe((data) => {
      console.log(data);
      this.cityName = data.cityName
      this.cityWeather = data.weatherName
      this.cityTemp = data.weatherTemp
    });
}

loadMontpellierName(): void {
  this.httpClient
    .get<any>('http://localhost:3000?cityName=montpellier')
    .subscribe((data) => {
      console.log(data);
      this.cityName = data.cityName
      this.cityWeather = data.weatherName
      this.cityTemp = data.weatherTemp
    });
}
}
