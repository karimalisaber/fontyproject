import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import { AdminAuthGuardService } from 'src/app/modules/shared/services/admin-auth-guard.service';

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
    }
    else if(resl && !this.auth.isAdmin ){
      // this.invalidLogin = true;
      console.log(resl);
      this.router.navigate([returnUrl || '/dashboard/orders/recieve_orders']);
    }

    }, error => this.invalidLogin = true); 
    
  }

}
