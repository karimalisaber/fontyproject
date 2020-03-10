import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  newContacts = {
    address: '',
    phone: '',
    email: ''
  };

  constructor(private contactsServices: ContactsService) { }

  ngOnInit() {
    this.contactsServices.currentContacts.subscribe(newContacts => newContacts = newContacts);
  }

  addContacts(form: NgForm) {
    console.log(this.newContacts);
    this.newContacts.address = form.value;
    this.newContacts.phone = form.value;
    this.newContacts.email = form.value;
  }

}
