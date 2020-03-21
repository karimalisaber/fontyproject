import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { postSalesUsersUrl, getSalesUsersUrl } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  postUser(userForm){
     return this.http.post(postSalesUsersUrl, userForm);
  }

  getUsers(){
    return this.http.get(getSalesUsersUrl);
  }
}
