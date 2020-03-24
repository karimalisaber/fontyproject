import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(private http: HttpClient) {}

  
  addSlider(slider){
    return this.http.post('', slider);
  }
}
