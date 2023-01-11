import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
// import { Axios } from 'axios';
// import { Details } from './model/details';
import { current, det2, det3, detail, fulldetail, fullforecast, symbolphrase } from './detail';
//import { fulldetails } from './detail';
import { DefaultTitleStrategy } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})

export class AppComponent implements OnInit  {
  title = 'weather';
  item:any;
  value:any;
  location:any;
  arr:any=[];
  date:any=[];
  maxTemp:any=[];
  minTemp:any=[];
  minRelHumidity:any=[];
  symbolPhrase:any=[];
  a:any;
  b:any;
  c:any;
  d:any;
  e:any;
  f:any;
  g:any;
  
  users: fulldetail;
  locid: det2;
  sym: symbolphrase;
  forca: fullforecast;
  
  constructor(private service:ApiService) { 
    this.users = {} as fulldetail;
    this.locid = {} as det2;
    this.forca = {} as fullforecast;
    this.sym = {} as symbolphrase;
  } 

  ngOnInit(): void {
    //this.showAllData() 
  }

  // refreshPage() {
  //   window.location.reload();
  // }


  showAllData(val:any) {
    console.log();
      this.service.getDetails(val).subscribe((response: fulldetail) => {
        //this.users=response.data;
        this.location=val;
        this.users.cloud_pct=response?.cloud_pct;
        this.users.temp=response?.temp;
        this.users.feels_like=response.feels_like;
        this.users.humidity=response.humidity;
        this.users.min_temp=response.min_temp;
        this.users.max_temp=response.max_temp;
        this.users.wind_speed=response.wind_speed;
        this.users.wind_degrees=response.wind_degrees;
        this.users.sunrise=response.sunrise;
        this.users.sunset=response.sunset;
        this.users.data=response.data;
        });
      }

  
  // clearArray() {
  //   console.log(this.arr);
  //   return this.arr=[];
  // }

  getlocationid(val:any) {
    this.arr.length=0;
    this.service.getLocationID(val).subscribe((response: det3) => {
        // console.log(response);
      this.locid.id=response.locations[0].id;
      // console.log(this.locid.id);
      this.locid.name=response.locations[0].name;
      this.locid.country=response.locations[0].country;
      this.locid.timezone=response.locations[0].timezone;
      this.locid.language=response.locations[0].language;
      this.locid.adminArea=response.locations[0].adminArea;
      this.locid.adminArea2=response.locations[0].adminArea2;
      this.locid.adminArea3=response.locations[0].adminArea3;
      this.locid.lon=response.locations[0].lon;
      this.locid.lat=response.locations[0].lat;

      this.service.getsymbolphrase(this.locid.id).subscribe((response: symbolphrase) => {
        this.sym.symbolPhrase = response.current.symbolPhrase;
        this.sym.time = response.current.time;

        if(this.sym.symbolPhrase == 'clear') {
          this.a = "assets/clear.jpg";
        }
        else if(this.sym.symbolPhrase == 'mostly clear') {
          this.a = "assets/mostly clear.jpg";
        }
        else if(this.sym.symbolPhrase == 'cloudy') {
          this.a = "assets/cloudy.jpg";
        }
        else if(this.sym.symbolPhrase == 'rainy') {
          this.a = "assets/rainy.jpg";
        }
        else if(this.sym.symbolPhrase == 'fog') {
          this.a = "assets/fog.jpg";
        }
        else if(this.sym.symbolPhrase == 'sunny') {
          this.a = "assets/sunny.jpg";
        }
        else if(this.sym.symbolPhrase == 'partly cloudy') {
          this.a = "assets/partly cloudy.jpg";
        }
        else if(this.sym.symbolPhrase == 'overcast') {
          this.a = "assets/overcast.jpg";
        }
        else {
          this.a = "assets/default2.jpg";
        }
      });
      
      this.service.getForecast(this.locid.id).subscribe((response: fullforecast) => {
        console.log(response.forecast[0]);
        this.arr=[];
        console.log(this.arr);
        // this.forca.date=response.forecast[0].date;
        // this.forca.maxTemp=response.forecast[0].maxTemp;
        // this.forca.minTemp=response.forecast[0].minTemp;
        // this.forca.minRelHumidity=response.forecast[0].minRelHumidity;
        // this.forca.symbolPhrase=response.forecast[0].symbolPhrase;

        // this.forca.date=response.forecast[1].date;
        // this.forca.maxTemp=response.forecast[1].maxTemp;
        // this.forca.minTemp=response.forecast[1].minTemp;
        // this.forca.minRelHumidity=response.forecast[1].minRelHumidity;

        // this.forca.date=response.forecast[2].date;
        // this.forca.maxTemp=response.forecast[2].maxTemp;
        // this.forca.minTemp=response.forecast[2].minTemp;
        // this.forca.minRelHumidity=response.forecast[2].minRelHumidity;

        // this.forca.date=response.forecast[3].date;
        // this.forca.maxTemp=response.forecast[3].maxTemp;
        // this.forca.minTemp=response.forecast[3].minTemp;
        // this.forca.minRelHumidity=response.forecast[3].minRelHumidity;

        // this.forca.date=response.forecast[4].date;
        // this.forca.maxTemp=response.forecast[4].maxTemp;
        // this.forca.minTemp=response.forecast[4].minTemp;
        // this.forca.minRelHumidity=response.forecast[4].minRelHumidity;


        this.date.push(response.forecast[0].date);
        this.date.push(response.forecast[1].date);
        this.date.push(response.forecast[2].date);
        this.date.push(response.forecast[3].date);
        this.date.push(response.forecast[4].date);        

        this.minTemp.push(response.forecast[0].minTemp);
        this.minTemp.push(response.forecast[1].minTemp);
        this.minTemp.push(response.forecast[2].minTemp);
        this.minTemp.push(response.forecast[3].minTemp);
        this.minTemp.push(response.forecast[4].minTemp);
        
        this.maxTemp.push(response.forecast[0].maxTemp);
        this.maxTemp.push(response.forecast[1].maxTemp);
        this.maxTemp.push(response.forecast[2].maxTemp);
        this.maxTemp.push(response.forecast[3].maxTemp);
        this.maxTemp.push(response.forecast[4].maxTemp);

        // console.log(response.forecast[0].symbolPhrase);
        this.symbolPhrase.push(response.forecast[0].symbolPhrase);
        this.symbolPhrase.push(response.forecast[1].symbolPhrase);
        this.symbolPhrase.push(response.forecast[2].symbolPhrase);
        this.symbolPhrase.push(response.forecast[3].symbolPhrase);
        this.symbolPhrase.push(response.forecast[4].symbolPhrase);

        // console.log(response.forecast[0]);
        this.minRelHumidity.push(response.forecast[0].minRelHumidity);
        this.minRelHumidity.push(response.forecast[1].minRelHumidity);
        this.minRelHumidity.push(response.forecast[2].minRelHumidity);
        this.minRelHumidity.push(response.forecast[3].minRelHumidity);
        this.minRelHumidity.push(response.forecast[4].minRelHumidity);

        console.log(this.arr);
        // this.arr.push(this.date);
        // this.arr.push(this.maxTemp);
        // this.arr.push(this.minTemp);
        // this.arr.push(this.minRelHumidity);
        // this.arr.push(this.symbolPhrase);

        console.log(this.arr);
        
      })

    });

  }


}