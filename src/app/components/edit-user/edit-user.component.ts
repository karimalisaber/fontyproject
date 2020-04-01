import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import {  userData, userFormData } from 'src/app/interfaces/sales';
import { MatDialog } from '@angular/material';
import { SuccesPostDialogComponent } from '../assets/succes-post-dialog/succes-post-dialog.component';
import { ErrorDialogComponent } from '../assets/error-dialog/error-dialog.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
id: number;
userData: userData;

userFormData: userFormData ={name:'', email: '', phone: null, password: ''};

  constructor(private route: ActivatedRoute, private user: UsersService, private router: Router, private dialog: MatDialog) {
    
    
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
    this.user.updateUser(userData, this.id).subscribe(
      res=> this.dialog.open(SuccesPostDialogComponent),
      error=> this.dialog.open(ErrorDialogComponent)
    );
    
  }

}
