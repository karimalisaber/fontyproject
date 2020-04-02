import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  login(form){
    let url = 'http://fonty.ieeeshasb.org/api/auth/admin_login';
    
    return this.http.post(url, form);
  }
}
