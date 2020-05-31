import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AdminAuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(route, state: RouterStateSnapshot){
    if (this.auth.isAdmin) return true; // make it 0 not one
    
    if (this.auth.isLogin())
      this.router.navigate(['/dashboard/orders/recieve_orders']);
    else 
      this.router.navigate(['/login']);

    return false ;
  }
}
