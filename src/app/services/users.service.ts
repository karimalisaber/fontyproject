import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { postUsersUrl, getUsersUrl, deleteUserUrl, getSpecificUserUrl, updateUserUrl } from '../environment/environment';
import {map} from "rxjs/operators";
import { Sales, userData  } from '../interfaces/sales';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
//users
getUsers(){
  return this.http.get(getUsersUrl).pipe(map((response: Sales) => response.data));
}


  // sallers 
  postSaller(userForm){
     return this.http.post(postUsersUrl, userForm);
  }

  getSalles(){
    return this.http.get(getUsersUrl).pipe(map((response: Sales) => response.data));
  }

  getSpecificSaller(id){
    return this.http.get<userData>(getSpecificUserUrl+id);
  }

  updateSaller(userData, id){
   return this.http.put(updateUserUrl, userData);
  }

  deleteSaller(id){
    return this.http.delete(deleteUserUrl + id);
  }
}
