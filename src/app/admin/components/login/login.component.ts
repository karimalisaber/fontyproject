import { AdminAuthGuardService } from './../../../services/admin-auth-guard.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  invalidLogin: boolean = false;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute, private adminGuard: AdminAuthGuardService ) { }

  ngOnInit() {
  }

  login(credentials) {
   this.auth.login(credentials).subscribe(
    resl=>{
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

     if(resl && this.auth.isAdmin ){
      this.router.navigate([returnUrl || '/dashboard']);
    
    }else if(resl && !this.auth.isAdmin ){
      this.invalidLogin = true;
      console.log('invalid');
      this.router.navigate([returnUrl || '/dashboard/orders/recieve_orders']);
    }

    }, error => this.invalidLogin = true); 
    
  }

}
