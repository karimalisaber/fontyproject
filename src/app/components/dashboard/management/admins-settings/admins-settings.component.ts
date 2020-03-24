import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
import  { take} from "rxjs/operators";
@Component({
  selector: 'app-admins-settings',
  templateUrl: './admins-settings.component.html',
  styleUrls: ['./admins-settings.component.scss']
})
export class AdminsSettingsComponent implements OnInit {
users$;
  constructor(private user: UsersService, private http: HttpClient) { }

  ngOnInit() {
    this.users$ = this.user.getUsers();
  }

  // deleteUser(id){
  //   this.user.deleteUser(id).subscribe()
  // }

  deleteUser(id){
    // let deleteUrl = `http://fonty.ieeeshasb.org/api/auth/delete_sales/${id}`;
    this.user.deleteUser(id).pipe(take(1)).subscribe(data=> { 
    
      this.users$ = this.user.getUsers(); // update the view
    
    });
  }

}
