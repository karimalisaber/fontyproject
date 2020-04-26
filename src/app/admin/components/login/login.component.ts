import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponde } from 'src/app/interfaces/http-responde';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  invalidLogin: boolean = false;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
  }

  login(credentials) {
   this.auth.login(credentials).subscribe(
    resl=>{
     if(resl){
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl || '/dashboard']);
    }else 
      this.invalidLogin = true;
      
    }, error => this.invalidLogin = true); 
    
  }

}
