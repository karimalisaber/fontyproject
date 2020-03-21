import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admins-settings',
  templateUrl: './admins-settings.component.html',
  styleUrls: ['./admins-settings.component.scss']
})
export class AdminsSettingsComponent implements OnInit {
users$;
  constructor(private user: UsersService) { }

  ngOnInit() {
    this.users$ = this.user.getUsers();
    // this.user.getUsers().subscribe(rs=> console.log(rs));
  }

}
