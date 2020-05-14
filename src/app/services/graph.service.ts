import { map } from 'rxjs/operators';
import { getCurrentMonthDatahUrl, getSpecificMonthDataUrl } from './../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http: HttpClient) {}

  getCurrentMontData () {
   return  this.http.get(getCurrentMonthDatahUrl).pipe(map((res:any)=> res.data));
  }

  
  getSpecificMOnthData (monthNumber) {
    return  this.http.get(getSpecificMonthDataUrl + monthNumber).pipe(map((res:any)=> res.data));
   }
}
