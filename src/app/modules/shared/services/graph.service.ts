import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getCurrentMonthDatahUrl, getSpecificMonthDataUrl } from 'src/app/environment/environment';

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
