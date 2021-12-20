import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  URL = "http://api.petsline.ge/API/";

  HEADER = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
  }); 

  constructor(private Http:HttpClient) { }

  Post(options:any) {
    return this.Http.post<any>( 
      this.URL + options.Router + "/" ,
      options.Scheme,
    { headers: this.HEADER } ).subscribe(data => {
      return data;
    })
  }
}
