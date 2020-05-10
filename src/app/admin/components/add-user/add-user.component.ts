import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import {take} from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private user: UsersService, private snackBar: MatSnackBar){}

  ngOnInit() {
  }

  addUser(userForm){
    this.blurAllInputs();
    this.user.postSaller(userForm).pipe(take(1))
    .subscribe(
      res=>  this.snackBar.open('تم اضافة أدمن بنجاح ', `` , {duration: 1500}),
      error=> this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500}));
     
    document.querySelector('input').blur(); // for clear errors
  }

  private blurAllInputs(){
    let elements = document.querySelectorAll("input");
    elements.forEach((item:any)=> item.blur());
  }
}
