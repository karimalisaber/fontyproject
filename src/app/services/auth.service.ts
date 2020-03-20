import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  login(form){
    let url = 'http://fonty.ieeeshasb.org/api/auth/admin_login';
    let email = form.value.email;
    let password = form.value.password;
    return this.http.post(url, {email, password });
  }
}
