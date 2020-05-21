import { Component, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { UsersService } from 'src/app/modules/shared/services/users.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  emailExists = false;
  constructor(private user: UsersService, private snackBar: MatSnackBar){}

  ngOnInit() {}

  addUser(userForm){
    this.emailExists = false;
    this.blurAllInputs();
    this.user.postSaller(userForm).pipe(take(1))
    .subscribe(
      ()=>  this.snackBar.open('تم اضافة أدمن بنجاح ', `` , {duration: 1500}),
      error=> {
        if (error.status === 400) this.emailExists = true;
        else this.snackBar.open('حدثت مشكلة بالاتصال بالسيرفر برجاء المحاولة مرة أخرى', `` , {duration: 1500});
      });
    document.querySelector('input').blur(); // for clear errors
  }

  private blurAllInputs(){
    let elements = document.querySelectorAll("input");
    elements.forEach((item:any)=> item.blur());
  }
}
