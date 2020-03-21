import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

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
    this.user.postUser(userForm).subscribe();
      // userForm.value = null //pessmitic update
    // );    
  // }

  // this.router.navigate(['/dashboard/management/admins']); // if success only
}

}
