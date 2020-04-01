import { Injectable } from '@angular/core';
import { GetCategoriesResponse, UserCat } from '../interfaces/categories-response';
import { HttpClient } from '@angular/common/http';
import {map, take} from 'rxjs/operators';
import { getCategoriesUrl, deleteCategoryUrl, updateCategoryUrl, addCategoryUrl } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get<GetCategoriesResponse>(getCategoriesUrl).pipe(map(response => {
      let categories: Array<UserCat> =[];
        response.data.forEach(element => categories.push({id: element.id , name: element.name}));
      return categories;
    }));
  }

  deleteCategory(id){
   return this.http.delete(deleteCategoryUrl+id).pipe(take(1));
  }

  updateCategory(category){
    return this.http.put(updateCategoryUrl ,category).pipe(take(1)); 
  }

  addCategory(category){
    return this.http.post(addCategoryUrl ,category).pipe(take(1)); 
  }
}