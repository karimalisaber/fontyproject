import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponde } from 'src/app/interfaces/http-responde';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  admin: boolean = false;
  constructor(private auth: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  login(form) {
   this.auth.login(form).subscribe
   
   (
    (resl: HttpResponde)=>{
     if( resl.status === true){
       if (resl.data.role === '0') this.admin = true;

       if (this.admin !== true) {
         this.router.navigate(['/dashboard/admin']);
          
       }else{
        this.router.navigate(['/dashboard']);
         return true;
       }       
     }

   }); 
  }

}
