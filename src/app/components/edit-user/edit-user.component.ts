import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import {  userData, userFormData } from 'src/app/interfaces/sales';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
id: number;
userData: userData;

userFormData: userFormData ={name:'', email: '', phone: null, password: ''};

  constructor(private route: ActivatedRoute, private user: UsersService, private router: Router) {
    
    
   }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.user.getuser(this.id).subscribe(response=>{
      this.userData = response;
      this.userFormData = {
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
        password: ""
      }
    })
  }

  submit(userData){
    userData.id = this.id; 
    this.user.updateUser(userData, this.id).subscribe(res=> console.log(res));
    this.router.navigate(['/dashboard/management/admins']); // if success only
  }

}
