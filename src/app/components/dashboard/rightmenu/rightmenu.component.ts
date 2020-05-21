import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/shared/services/auth.service';

@Component({
  selector: 'app-rightmenu',
  templateUrl: './rightmenu.component.html',
  styleUrls: ['./rightmenu.component.scss']
})

export class RightmenuComponent implements OnInit {
  admin: boolean = false ;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.admin = this.auth.isAdmin ;
  }

}
