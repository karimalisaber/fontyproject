import { Injectable } from '@angular/core';
import { GetCategoriesResponse, UserCat } from '../interfaces/categories-response';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { getCategoriesUrl } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
  constructor(private http: HttpClient) { }

  getCategories(){
    let getUrl = getCategoriesUrl;

    return this.http.get<GetCategoriesResponse>(getUrl).pipe(map(response => {
      let categories: Array<UserCat> =[];
        response.data.forEach(element => categories.push({id: element.id , name: element.name}));
      return categories;
    }));

  }
}
