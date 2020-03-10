import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts = new BehaviorSubject({
    address: '',
    phone: '',
    email: ''
  });

  currentContacts = this.contacts.asObservable();

  constructor() { }

  changeContacts(newContacts: {address: string, phone: string, email: string}) {
    this.contacts.next(newContacts);
  }

}
