import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
contacts;

  constructor(private site: SiteService) { }

  ngOnInit() {
    this.site.getContacts().pipe(take(1))
    .subscribe(  res=>  this.contacts = res );
  }
}
