import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import {take} from 'rxjs/operators';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private user: UsersService, private router: Router){}

  ngOnInit() {
  }

  submit(userForm){
    this.user.postUser(userForm).pipe(take(1)).subscribe();
    // location.reload(); //pessmitic update
      
    // userForm.reset(); //pessmitic update 
    document.querySelector('input').blur();

  this.router.navigate(['/dashboard/add-user']); // if success only
}

}
