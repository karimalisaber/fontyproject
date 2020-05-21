import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, take} from "rxjs/operators";
import { Sales, userData  } from '../../../interfaces/sales';
import { getUsersUrl, getUsersSearchUrl, postSalesUrl, getSalesUrl, getSpecificSalerUrl, updateSallerUrl, deleteSallerUrl } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
//users
  getSomeUsers(page){
    return this.http.get(getUsersUrl + "?page=" + page).pipe(map((response: Sales) => response.data),take(1));
  }

  getSearchUsers(value){
    return this.http.get(getUsersSearchUrl + value).pipe(map((response: Sales) => response.data), take(1));
  }

  // sallers 
  postSaller(userForm){
     return this.http.post(postSalesUrl, userForm).pipe(take(1));
  }

  getSalles(){
    return this.http.get(getSalesUrl).pipe(map((response: Sales) => response.data), take(1));
  }

  getSpecificSaller(id){
    return this.http.get<userData>(getSpecificSalerUrl+id).pipe(take(1));
  }

  updateSaller(userData, id){
   return this.http.put(updateSallerUrl, userData);
  }

  deleteSaller(id){
    return this.http.delete(deleteSallerUrl + id);
  }
}
