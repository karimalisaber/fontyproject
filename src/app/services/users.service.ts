import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { postSalesUrl, getSalesUrl, deleteSallerUrl, getSpecificSalerUrl, updateSallerUrl, getUsersUrl } from '../environment/environment';
import {map} from "rxjs/operators";
import { Sales, userData  } from '../interfaces/sales';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
//users
getSomeUsers(page){
  return this.http.get(getUsersUrl + "?page=" + page).pipe(map((response: Sales) => response.data));
}


  // sallers 
  postSaller(userForm){
     return this.http.post(postSalesUrl, userForm);
  }

  getSalles(){
    return this.http.get(getSalesUrl).pipe(map((response: Sales) => response.data));
  }

  getSpecificSaller(id){
    return this.http.get<userData>(getSpecificSalerUrl+id);
  }

  updateSaller(userData, id){
   return this.http.put(updateSallerUrl, userData);
  }

  deleteSaller(id){
    return this.http.delete(deleteSallerUrl + id);
  }
}
