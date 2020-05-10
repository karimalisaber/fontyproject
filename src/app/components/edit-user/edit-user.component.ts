import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import {  userData, userFormData } from 'src/app/interfaces/sales';
import { MatDialog, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
id: number;
userData: userData;

userFormData: userFormData ={name:'', email: '', phone: null, password: ''};

  constructor(private route: ActivatedRoute, private user: UsersService, private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar) {
    
    
   }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.user.getSpecificSaller(this.id).subscribe(response=>{
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
    this.user.updateSaller(userData, this.id).subscribe(
      data=> this.snackBar.open('تم تعديل المستخدم بنجاح ', `x` , {duration: 1500}),
      
      error => this.snackBar.open('حدثت مشكلة أثناء تعديل المستخدم برجاء المحاولة مرة أخرى', `` , {duration: 1500})
    );
  }

}
