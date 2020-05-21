import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SallerGuardService {


  constructor(private router: Router, private auth: AuthService) { }

  canActivate(route, state: RouterStateSnapshot){
    if (this.auth.isAdmin) {
      this.router.navigate(['/not-found']);
      
      return false; 
    }// make it 0 not one
    
    if (this.auth.isLogin)
      this.router.navigate(['/dashboard/orders/recieve_orders']);
    else 
      this.router.navigate(['/login'], {queryParams: {returnUrl: state}});

    return false ;
  }
}
