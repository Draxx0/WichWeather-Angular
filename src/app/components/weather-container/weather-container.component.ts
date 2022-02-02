import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'weatherComponent',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss'],
  template: `<main [ngStyle]="{'background-image': isSun ? bgSun : bgCloud;}"></main>`
})
export class WeatherContainerComponent implements OnInit {
  bgSun = 'url(../../../../../assets/img/bg/Mountain_View_and_Beautiful_Landscape_generated.jpg)';
  bgCloud = 'url(../../../../../assets/img/bg/Clouds.jpg)';
  isSun: boolean = false;
  isCloud: boolean = true;
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

          

          console.log(data.weatherName);
          
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

        if (data.weatherName == 'Clear') {
          this.isSun = true
          this.isCloud = false
          console.log("isSun :", this.isSun);
          console.log("isCloud :", this.isCloud);
          
        }
        
        if (data.weatherName == 'Clouds') {
          this.isSun = false
          this.isCloud = true
          console.log("isSun :", this.isSun);
          console.log("isCloud :", this.isCloud);
        }
        
        if (data.weatherName == "cloudy") {
          document.body.style.backgroundImage = "https://via.placeholder.com"
        } 
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
        
        if (data.weatherName == 'Clear') {
          this.isSun = true
          this.isCloud = false
          console.log("isSun :", this.isSun);
          console.log("isCloud :", this.isCloud);
        }
        
        if (data.weatherName == 'Clouds') {
          this.isSun = false
          this.isCloud = true
          console.log("isSun :", this.isSun);
          console.log("isCloud :", this.isCloud);
        }
        
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
        
        if (data.weatherName == 'Clear') {
          this.isSun = true
          this.isCloud = false
          console.log("isSun :", this.isSun);
          console.log("isCloud :", this.isCloud);
        }
        
        if (data.weatherName == 'Clouds') {
          this.isSun = false
          this.isCloud = true
          console.log("isSun :", this.isSun);
          console.log("isCloud :", this.isCloud);
        }
        
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
        
        if (data.weatherName == 'Clear') {
          this.isSun = true
          this.isCloud = false
          console.log("isSun :", this.isSun);
          console.log("isCloud :", this.isCloud);
        }
        
        if (data.weatherName == 'Clouds') {
          this.isSun = false
          this.isCloud = true
          console.log("isSun :", this.isSun);
          console.log("isCloud :", this.isCloud);
        }
        
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
        
        if (data.weatherName == 'Clear') {
          this.isSun = true
          this.isCloud = false
          console.log("isSun :", this.isSun);
          console.log("isCloud :", this.isCloud);
        }
        
        if (data.weatherName == 'Clouds') {
          this.isSun = false
          this.isCloud = true
          console.log("isSun :", this.isSun);
          console.log("isCloud :", this.isCloud);
        }
        
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
        
        if (data.weatherName == 'Clear') {
          this.isSun = true
          this.isCloud = false
          console.log("isSun :", this.isSun);
          console.log("isCloud :", this.isCloud);
        }
        
        if (data.weatherName == 'Clouds') {
          this.isSun = false
          this.isCloud = true
          console.log("isSun :", this.isSun);
          console.log("isCloud :", this.isCloud);
        }
        
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
        
        if (data.weatherName == 'Clear') {
          this.isSun = true
          this.isCloud = false
          console.log("isSun :", this.isSun);
          console.log("isCloud :", this.isCloud);
        }
        
        if (data.weatherName == 'Clouds') {
          this.isSun = false
          this.isCloud = true
          console.log("isSun :", this.isSun);
          console.log("isCloud :", this.isCloud);
      }

    });
}
}
