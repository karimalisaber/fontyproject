import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import {take} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/components/assets/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from 'src/app/components/assets/error-dialog/error-dialog.component';
import { SuccesPostDialogComponent } from 'src/app/components/assets/succes-post-dialog/succes-post-dialog.component';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private user: UsersService, private dialog: MatDialog){}

  ngOnInit() {
  }

  addUser(userForm){
    this.user.postUser(userForm).pipe(take(1))
    .subscribe(
      res=> this.dialog.open(SuccesPostDialogComponent),
      error=> this.dialog.open(ErrorDialogComponent)
    );
    
    // userForm.reset(); //pessmitic update 
    document.querySelector('input').blur();
  }
}
