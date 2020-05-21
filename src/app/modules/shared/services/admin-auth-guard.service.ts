import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AdminAuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(){
    if (this.auth.isAdmin) return true; // make it 0 not one
    
    this.router.navigate['/not-found'];
    return false ;
  }
}
