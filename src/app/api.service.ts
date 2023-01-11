import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Details } from './model/details';
import {  det2, det3, fulldetail, fullforecast, symbolphrase } from './detail';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  a: any[] = [];

  readonly TimeAPIUrl = "https://localhost:8080";

  location:any='Coimbatore';

  constructor(private http:HttpClient) { }

  public getDetails(val:any): Observable<fulldetail> {
    const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather";
    const opt = {
      method: 'GET',
      url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
      params: {city: val},
      headers: {
        'X-RapidAPI-Key': '08ae8b4222msh06098cc16e267dbp1bd4a7jsne6fa1086f454',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    var b = this.http.request<fulldetail>('GET',url,opt); 
    console.log(b);
    return this.http.get<fulldetail>(url,opt);
  };


  // public getDetails(val:any): Observable<fulldetail> {
  //   const url = 'https://foreca-weather.p.rapidapi.com/current/102643743';
  //   const opt = {
  //     method: 'GET',
  //     url: 'https://foreca-weather.p.rapidapi.com/current/102643743',
  //     params: {alt: '0', tempunit: 'C', windunit: 'MS', tz: val, lang: 'en'},
  //     headers: {
  //       'X-RapidAPI-Key': '08ae8b4222msh06098cc16e267dbp1bd4a7jsne6fa1086f454',
  //       'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
  //     }
  //   };

  //   return this.http.get<fulldetail>(url,opt);
  // }


  public getLocationID(val:any): Observable<det3> {
    const url = 'https://foreca-weather.p.rapidapi.com/location/search/'+val;
    const opt = {
      method: 'GET',
      url1: 'https://foreca-weather.p.rapidapi.com/location/search/'+val,
      params: {lang: 'en', country: 'in'},
      headers: {
        'X-RapidAPI-Key': '08ae8b4222msh06098cc16e267dbp1bd4a7jsne6fa1086f454',
        'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
      }
    };
    var c=this.http.get(url,opt);
    console.log(c);

    return this.http.request<det3>('GET',url,opt); 

};

public getsymbolphrase(val:any): Observable<symbolphrase> {
    const url = 'https://foreca-weather.p.rapidapi.com/current/'+val;
    const opt = {
      method: 'GET',
      url: 'https://foreca-weather.p.rapidapi.com/current/'+val,
      params: {alt: '0', tempunit: 'C', windunit: 'MS', tz: 'Asia/Kolkata', lang: 'en'},
      headers: {
        'X-RapidAPI-Key': '08ae8b4222msh06098cc16e267dbp1bd4a7jsne6fa1086f454',
        'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
      }
    };

    return this.http.get<symbolphrase>(url,opt);
  }
  

  public getForecast(val:any): Observable<fullforecast> {
    console.log(val);

    const url = 'https://foreca-weather.p.rapidapi.com/forecast/daily/'+val;
    const opt = {
      method: 'GET',
      url1: 'https://foreca-weather.p.rapidapi.com/forecast/daily/'+val,
      params: {lang: 'en', country: 'in'},
      headers: {
        'X-RapidAPI-Key': '08ae8b4222msh06098cc16e267dbp1bd4a7jsne6fa1086f454',
        'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
      }
    };
    var d=this.http.get(url,opt);
    console.log(d);

    return this.http.get<fullforecast>(url,opt); 

  };

}

