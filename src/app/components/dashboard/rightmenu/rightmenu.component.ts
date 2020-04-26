import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rightmenu',
  templateUrl: './rightmenu.component.html',
  styleUrls: ['./rightmenu.component.scss']
})

export class RightmenuComponent implements OnInit {
  admin: boolean = false ;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    if (this.auth.currentUser)
    this.admin = (this.auth.currentUser.sub === 0)? true : false;
  }

}
