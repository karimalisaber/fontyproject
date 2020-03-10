import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  newContacts = this.contactsServices.contacts;


  constructor(private contactsServices: ContactsService) { }

  ngOnInit() {
    this.contactsServices.currentContacts.subscribe(newContacts => newContacts = newContacts);
  }

}
