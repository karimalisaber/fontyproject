import { Injectable } from '@angular/core';
import { GetCategoriesResponse } from '../interfaces/categories-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
  constructor(private http: HttpClient) { }

  getCategoris(){
    let getUrl = 'http://fonty.ieeeshasb.org/api/web/categories';    
    return this.http.get<GetCategoriesResponse>(getUrl);

  }
}
