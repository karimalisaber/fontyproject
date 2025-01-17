import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor (private route: ActivatedRoute, private router: Router, private auth: AuthService) { }

  canActivate(route, state: RouterStateSnapshot){
    if (this.auth.isLogin()) return true;

     this.router.navigate([ '/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }

}
